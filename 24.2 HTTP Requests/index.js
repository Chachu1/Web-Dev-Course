import express from 'express';
const app = express();

var name = "mohsin"

app.get("/", (request, response) => {
    response.send('<h1> HELLO </h1>');
})

app.get("/about", (request, response) => {
    response.send('<h1>About me </h1>');
})

app.get("/contact", (request, response) => {
    response.send('<h1>This is contact Page </h1>');
})

app.listen(3000, () => {
    console.log(`hello world ${name}`)
})
