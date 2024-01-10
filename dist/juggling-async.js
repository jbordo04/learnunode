"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const http2 = require("http");
const dataArray = [];
function httpArray(url, index) {
    return new Promise((resolve, reject) => {
        http2
            .get(url, (res) => __awaiter(this, void 0, void 0, function* () {
            let arrayChunk = "";
            res.on("data", (chunk) => {
                if (arrayChunk !== undefined) {
                    arrayChunk += chunk.toString();
                }
            });
            res.on("end", () => {
                resolve(arrayChunk);
            });
        }))
            .on("error", (error) => {
            reject(error);
        });
    });
}
function httpAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 3; i++) {
            const data = yield httpArray(process.argv[2 + i], i);
            dataArray.push(data);
        }
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield httpAsync();
    dataArray.forEach((data) => {
        console.log(data);
    });
}))();
//# sourceMappingURL=juggling-async.js.map