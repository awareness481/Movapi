import axios from 'axios';

const trending = async () => {
  const response = await axios.get('/dev/trending');
  return response.data;
}

export default trending;