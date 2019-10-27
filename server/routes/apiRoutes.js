const axios = require('axios');

const key = process.env.API_KEY;
const baseURL = 'http://www.omdbapi.com/';

module.exports = (app) => {
  app.get('/api/id/:id',  async (req, res) => {
    const movie = await axios.get(
      `${baseURL}?i=${req.params.id}&apikey=${key}`
      )
      .catch(e => console.log(e));
    res.send(movie.data);
  })

  app.get('/api/s/:query', async (req, res) => {
    const results = await axios.get(
      `${baseURL}?s=${req.params.query}&apikey=${key}`
      )
      .catch(e => console.log(e));
      res.send(results.data)
  })
}