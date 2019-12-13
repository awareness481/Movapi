import axios from 'axios';

const cast = async (id) => {

  const response = await axios.get('/dev/cast');
  return response.data;
}

export default cast;