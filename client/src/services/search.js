import axios from 'axios';

const search = async (query) => {
  // let response = await axios.get('/api/s/' + query)
  // return response.data.results;

  let response = await axios.get('/dev');
  return response.data;
  
};

export default search;