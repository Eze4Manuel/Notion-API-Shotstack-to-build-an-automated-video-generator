const express = require('express');
require("dotenv").config();
const app = express();
const e = require('express');
const { queryShotstackStatus } = require("./handler");

const port = 3000;



app.get('/process-video', async (req, res) => {
    await renderVideo(req, res)
});

app.get('/query-rendering-status', async (req, res) => {
    await queryShotstackStatus(req, res, req.query.render_id)
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})



