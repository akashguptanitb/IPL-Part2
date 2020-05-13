const express = require('express');
const app = express();
const input_year = require('./data6.json');

app.use(express.static("public"));

app.get('/eco', (req, res) => {
    let season = req.query.year;
    console.log(season);
    const data = input_year.economicalBowlerEachYear[season];

    res.send(data);
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server listening`)
})
//app.listen(8000, () => console.log('listening on port 3000'));