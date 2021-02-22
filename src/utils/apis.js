import axios from 'axios';

const BASE_API_URL = 'https://hn.algolia.com/api/v1/search?query=';

export const getSearches = async (query) => {
  try {
    const { data } = await axios.get(`${BASE_API_URL}${query}`);

    // console.log(data);
    return data;
  } catch (error) {
    throw new Error({ message: error });
  }
};
