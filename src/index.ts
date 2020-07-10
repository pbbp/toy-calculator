// Setup: https://khalilstemmler.com/blogs/typescript/node-starter-project/

import { sum } from "./sum";
import { difference } from "./difference";
import { multiply } from "./multiply";
import { divide } from "./divide";
import { exponentiate } from "./exponent";

const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/health-check', (req : any, res : any) => {
        res.send('Looks good to me!!')
    });

app.post('/health-check', (req : any, res : any) => {
        res.send('Post Looks good to me too!!')
    });   

app.post('/add', (req : any, res : any) => {
    const sumOutput = {
        "result" : sum(req.body.input)
    };

    res.status(200);
    res.json(sumOutput);
});

app.post('/divide', (req : any, res : any) => {
    const divideOutput = {
        "result" : divide(req.body.input)
    };

    res.status(200);
    res.json(divideOutput);
});

app.post('/multiply', (req : any, res : any) => {
    const multiplyOutput = {
        "result" : multiply(req.body.input)
    };

    res.status(200);
    res.json(multiplyOutput);
});

app.post('/subtract', (req : any, res : any) => {
    const differenceOutput = {
        "result" : difference(req.body.input)
    };

    res.status(200);
    res.json(differenceOutput);
});

app.post('/exponentiate', (req : any, res : any) => {
    const exponentiateOutput = {
        "result" : exponentiate(req.body.base, req.body.exponent)
    };

    res.status(200);
    res.json(exponentiateOutput);
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});