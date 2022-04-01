import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import {useForm} from "react-hook-form";
import useYelpBusinessSearch from "../hooks/useYelpBusinessSearch";
import ResultsList from "../components/ResultsList";
import {fontSize, indent} from '../constatns/styles';

export type SearchValue = {
  searchBar: string;
};

enum PriceTiers {
  CostEffective = 1,
  BigPricer = 2,
  BigSpender = 3
}

type SearchResults = Record<string, any>[]

const filterResults = (results:SearchResults, priceTier:PriceTiers) => {
  if(results && results.length > 0) {
    return results.filter(result => result.price && result.price.length === priceTier)
  }
}

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
      <ScrollView>
        <ResultsList title={'Cost Effective'} items={filterResults(results, PriceTiers.CostEffective)}/>
        <ResultsList title={'Big Pricer'} items={filterResults(results, PriceTiers.BigPricer)}/>
        <ResultsList title={'Big Spender'} items={filterResults(results, PriceTiers.BigSpender)}/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    paddingVertical: indent.small,
  },
  title: {
    fontSize: fontSize.enormous,

  },
  searchBarWrap: {
    marginTop: indent.small,
  }
})

export default SearchScreen