import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  return(
    <View style={styles.wrap}>
      <Text style={styles.title}> Search Screen</Text>
      <View style={styles.searchBarWrap}>
        <SearchBar/>
      </View>
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