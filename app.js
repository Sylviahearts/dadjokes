const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');



const app = express();
dotenv.config();
const port = Number(process.env.PORT)|| 4000;


const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }
};

app.get('/', async (req, res) =>{
  try {
    const response = await axios.request(options);
    res.status(200).json({ 
      message: 'success',
      data: {
        joke: response.data
      }
    })
    
  } catch (error) {
    console.error(error);
  }
} );


// Setting up the express server
app.listen(port, ()=>{
    console.log(`Server runnning on port: ${port}`)
  });