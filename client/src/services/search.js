import axios from 'axios';

const search = async (query) => {
  let response = await axios.get('/api/s/' + query)
  return response.data.Search;
  
};

export default search;