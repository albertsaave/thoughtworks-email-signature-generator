/* global require, process, __dirname */
require("newrelic");
var Express = require("express"),
    Compression = require("compression"),
    port = Number(process.env.PORT || 5000),
    server = new Express(),
    /*
        1,000 milliseconds/second *
        60 seconds/minute *
        60 minutes/hour *
        24 hours/day *
        365 days/year =
        1 year
    */
    maxAge = 1000 * 60 * 60 * 24 * 365,
    directory = __dirname + (server.settings.env === "production" ? "/build" : "/public");

server.use(new Compression());
server.use(Express.static(directory, { maxAge: maxAge }));

server.listen(port);