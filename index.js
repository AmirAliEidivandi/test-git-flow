const express = require("express");
const app = express();
const port = 3000;

const helloRouter = require("./routes/hello.routes");

app.use("/api/v1/hello", helloRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
