"use strict";
const net = require("net");
const port = Number(process.argv[2]) || 8000;
const date = new Date();
const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
const month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
const formatDate = date.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + minute;
const server = net.createServer((socket) => {
    socket.write(formatDate);
    socket.end("\n");
});
server.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
//# sourceMappingURL=time-server.js.map