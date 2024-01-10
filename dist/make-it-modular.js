"use strict";
const showFile = require("./mymodule");
const data6 = process.argv[2];
const ext6 = process.argv[3];
const response = showFile(data6, ext6, (err, data) => {
    if (err)
        return console.log(err);
    data.forEach((file) => console.log(file));
});
//# sourceMappingURL=make-it-modular.js.map