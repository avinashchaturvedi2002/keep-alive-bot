const https = require("https");

const URL = "https://book-barter-backend.onrender.com/api/books/explore"; 

const pingServer = () => {
  https.get(URL, (res) => {
    console.log(`[${new Date().toLocaleTimeString()}] Pinged! Status: ${res.statusCode}`);
  }).on("error", (err) => {
    console.error(`[${new Date().toLocaleTimeString()}] Error:`, err.message);
  });
};

pingServer();

setInterval(pingServer, 10 * 60 * 1000); // 10 minutes
