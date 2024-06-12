import axios from 'axios';

export default async function getData() {
  try {
    const response = await axios.get(
      'https://6651b06b20f4f4c442786ba8.mockapi.io/paintings',
    );

    const data = response.data;
    return data;
  } catch {
    throw new Error();
  }
}
