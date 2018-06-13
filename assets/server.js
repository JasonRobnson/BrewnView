let express = require("express");
let request = require("request");
let app = express();

let PORT = process.env.PORT || 8080;
let corsOptions = {
  origin: process.env.ORIGIN_URL || "http://localhost",
  optionsSuccessStatus: 200
};

app.use(express.static("public"));

app.use("/cors/*", (req, res) => {
  req.pipe(request(req.params[0])).pipe(res);
});

app.listen(PORT, () => {
  console.log("CORS-enabled web server listening on port " + PORT);
});
