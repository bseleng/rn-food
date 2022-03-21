import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import {useForm} from "react-hook-form";

export type SearchValue = {
  searchBar: string;
};


const SearchScreen = () => {
  const { control, handleSubmit} = useForm<SearchValue>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return(
    <View style={styles.wrap}>
      <View style={styles.searchBarWrap}>
        <SearchBar control={control}/>
        <Button title="Submit" onPress={onSubmit}  />
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