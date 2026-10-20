
import express from "express";

const PORT = 3000;
const app = express();

app.get("/user", (req, res) => {
    return res.status(200).json({
        message: "Welcome home"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
