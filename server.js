"use strict";
const http = require("http");
const facts = require("./facts");

http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-type": "text/plain" });
    response.write(facts[Math.floor(Math.random() * facts.length)]);
    response.end();
    })
    .listen(3000);


