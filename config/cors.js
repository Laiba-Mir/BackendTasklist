// config/cors.js
const cors = require("cors");

// Define whitelist of allowed origins
const whitelist = ["http://localhost:5173", "*"];

// Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = cors(corsOptions);







// const cors = require("cors");
// // Define CORS options
// const corsOptions = {
//   origin: "http://localhost:5175",
//   credentials: true // Allow credentials
// };
// // Create CORS middleware with options
// const corsMiddleware = cors(corsOptions);
// // Export the middleware
// module.exports = corsMiddleware;
