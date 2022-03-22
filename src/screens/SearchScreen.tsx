import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import {useForm, useWatch} from "react-hook-form";

export type SearchValue = {
  searchBar: string;
};


const SearchScreen = () => {
  const {control, handleSubmit} = useForm<SearchValue>();
  const searchTerm = useWatch({ control, name: "searchBar" })
  const onSubmit = handleSubmit((data) => {
      console.log(data)
    }
  )

  return (
    <View style={styles.wrap}>
      <View style={styles.searchBarWrap}>
        <SearchBar control={control} onSubmit={onSubmit}/>
      </View>
      <Text>{searchTerm}</Text>
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