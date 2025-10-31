const fs = require("fs").promises;
const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname,"public")));

app.get("/icons", async (req, res) =>
{
    try
    {
        const jsonString = await fs.readFile("./icons.json");
        const data = JSON.parse(jsonString);
        res.json(data);
    }
    catch(err)
    {
        console.error(err);
        res.status(500).send("Error reading data file");
    }
});

app.listen(PORT, () => 
{
    console.log(`Server running at http://localhost:${PORT}`);
});