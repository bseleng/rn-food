import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import {useForm} from "react-hook-form";
import useYelpBusinessSearch from "../hooks/useYelpBusinessSearch";
import ResultsList from "../components/ResultsList";

export type SearchValue = {
  searchBar: string;
};


const SearchScreen = () => {
  const {control, handleSubmit} = useForm<SearchValue>();
  const [searchApi, errorMessage, setErrorMessage, results] = useYelpBusinessSearch()

  const onSubmit = handleSubmit(({searchBar}) => {
      searchApi(searchBar)
    }
  )

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
      <ResultsList title={'Cost Effective'}/>
      <ResultsList title={'Big Pricer'}/>
      <ResultsList title={'Big Spender'}/>
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