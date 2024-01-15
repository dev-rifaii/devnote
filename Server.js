import express from "express";

const app = express();
const PORT = 3000;
const VIEWS_DIR = "./public/views";
const ROOT_PATH = {root: '.'}

app.use(express.static('public'));

app.get("/note/\\d+$", (req, res) => {
    res.sendFile(`${VIEWS_DIR}/Note.html`, ROOT_PATH);
});

app.get("/note/create", (req, res) => {
    res.sendFile(`${VIEWS_DIR}/CreateNote.html`, ROOT_PATH);
});

app.get("/dashboard", (req, res) => {
    res.sendFile(`${VIEWS_DIR}/Dashboard.html`, ROOT_PATH);
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})