import {useEffect, useState} from 'react';
import yelp from "../api/yelp";

export default () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [results, setResults] = useState([])

  const searchApi = async (term: string) => {
    console.log(term)
    try {
      const response = await yelp.get('/search', {
        params: {
          term,
          limit: 50,
          location: 'NYC'
        }
      })
      setResults(response.data.businesses)
    } catch (e) {
      switch (e.response.status) {
        case 400:
          setErrorMessage('Bad request, please try again later')
          break
        default:
          setErrorMessage('I am sorry, something went wrong')
      }
    }

  }

  useEffect(() => {
    searchApi('ikra')
  }, [])

  return [searchApi, errorMessage, setErrorMessage, results]  as const;
  // return {searchApi, errorMessage, setErrorMessage, results}

}
