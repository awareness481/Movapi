import axios from 'axios';

const search = async (query) => {
  const response = axios.get('localhost:5000/api/s/' + query);
  return response.data;
};

export default { search };