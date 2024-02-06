import express from "express";

const app = express();

app.get("/", () => console.log("is good"));

const handleListening = () => console.log("Server listening on port 4000");

app.listen(4000, handleListening);
