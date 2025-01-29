import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/public/index.html');

});

app.post('/submit', (req, res)=>{
  var bandName = req.body["street"] + req.body["pet"];
  res.send(`<h1>Your band name is:</h1>${bandName}<h2>✌️</h2>`);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

