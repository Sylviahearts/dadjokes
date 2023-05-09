
const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const process = require('process');
const env  = require('./app.env');


const app = express();

const port = Number(process.env.PORT)|| 4000;

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    'X-RapidAPI-Key': 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

// Setting up the express server
app.listen(port, ()=>{
    console.log(`Server runnning on port: ${port}`)
  })