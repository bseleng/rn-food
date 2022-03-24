import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
  }
})