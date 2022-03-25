import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import {useForm} from "react-hook-form";

import yelp from '../api/yelp'

export type SearchValue = {
  searchBar: string;
};


const SearchScreen = () => {
  const {control, handleSubmit} = useForm<SearchValue>();
  const [errorMessage, setErrorMessage] = useState('')
  const searchApi = async (term: string) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term,
          limit: 50,
          location: 'saint petersburg'
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
  const onSubmit = handleSubmit(({searchBar}) => {
    searchApi(searchBar)

    }
  )
  const [results, setResults] = useState([])

  return (
    <View style={styles.wrap}>
      <View style={styles.searchBarWrap}>
        <SearchBar
          control={control}
          onSubmit={onSubmit}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      </View>
      <Text> We have found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    padding: 16,
  },
  title: {
    fontSize: 24,

  },
  searchBarWrap: {
    marginTop: 8,
  }
})

export default SearchScreen