import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer zkfKzHZpJTfd05g4HoQ0s5g8cbuliln6oGw5lBrhewic7tAsKU0ISI69XSIxn7_iAC94WHd6MVrPz-N-qbTsTwUf-XMLLfBGBx6sgenJZy-31zg7uMNJkL_Y7oYzYnYx'
  }
})