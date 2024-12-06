import axios from 'axios';

const ACCESS_KEY = 'WUa5RiUiO4QbbqzE1f-3CavT3jCMYL8wHiHjHj6MlDE';

axios.defaults.baseURL = 'https://api.unsplash.com';

axios.defaults.headers = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
  'Accept-Version': 'v1',
};

axios.defaults.params = {
  per_page: 12,
  order_by: 'latest',
};

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get('search/photos', {
      params: {
        query,
        page,
      },
    });

    if (response.data.results && response.data.results.length > 0) {
      console.log(response.data);
      return response.data;
    } else {
      throw new Error('Sorry, no results found');
    }
  } catch (error) {
    if (error.response) {
      console.error('Error fetching images:', error.response);
    } else {
      console.error('Error:', error.message);
    }
    throw error;
  }
};

export default fetchImages;
