import axios from 'axios';
import { BASE_API_URL } from './constants';

export const getSearches = async (query) => {
  try {
    const { data } = await axios.get(`${BASE_API_URL}${query}`);

    // console.log(hits);
    return data.hits;
  } catch (error) {
    throw new Error({ message: error });
  }
};
