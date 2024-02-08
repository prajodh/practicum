const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.get('/',(req,res) => {
    res.send('Arithemetic service - Hello World')
})

app.get('/add/:n/:m', (req, res) => {
    console.log(req.params.n, req.params.m)
    res.json(Number(req.params.n) + Number(req.params.m));
  });
//hello world
app.listen(port, () => {
    console.log(`Arithmetic service running at http://localhost:${port}`);
});
