const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const {add,sub,mul,div} = require("./arithematica")

app.use(express.json());
app.use(cors());
app.get('/',(req,res) => {
    res.send('Arithemetic service - Hello World')
})

app.get('/add/:n/:m', (req, res) => {
    console.log(req.params.n, req.params.m)
    const sum = add(Number(req.params.n) , Number(req.params.m))
    console.log(sum)
    res.json(sum);
  });

app.get('/mul/:n/:m', (req, res) => {
console.log(req.params.n, req.params.m)
res.json(mul(Number(req.params.n) , Number(req.params.m)));
});

app.get('/div/:n/:m', (req, res) => {
console.log(req.params.n, req.params.m)
res.json(div(Number(req.params.n) , Number(req.params.m)));
});


app.get('/sub/:n/:m', (req, res) => {
console.log(req.params.n, req.params.m)
res.json(sub(Number(req.params.n) , Number(req.params.m)));
});
//hello world
app.listen(port, () => {
    console.log(`Arithmetic service running at http://localhost:${port}`);
});
