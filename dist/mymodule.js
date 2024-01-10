"use strict";
const fs6 = require("fs");
module.exports = function showFile(directory, extFile, callback) {
    fs6.readdir(directory, (err, files) => {
        if (err)
            return callback(err);
        if (!files)
            return callback(new Error("asdfas"), null);
        const listData = [];
        files.forEach((file) => {
            if (file.includes("." + extFile)) {
                listData.push(file);
            }
        });
        try {
            callback(null, listData);
        }
        catch (err) {
            return callback(err);
        }
    });
};
//# sourceMappingURL=mymodule.js.map