import express from "express";
import path from "path";

const app = express();
app.get("/", (req, res) => {
    //res.send("matterport")
    res.sendFile(path.resolve("public/index.html"))
})

app.listen(3001);