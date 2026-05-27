const rateLimit = require("express-rate-limit");


const limit = rateLimit({
    windowMs:15*60*1000,
    message: "Too many requests. Try again in 15 minutes",
    limit:15,
    statusCode:429
})

module.exports = limit;