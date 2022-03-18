import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = () => {
  return(
    <View style={styles.wrap}>
      <AntDesign name="search1" size={24} color="black" />
      <TextInput style={styles.input}>Start to explore</TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: '#c2c2c2',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    paddingLeft: 8,
  },
  input: {
    fontSize: 16,
    paddingLeft: 8,
  }
})

export default SearchBar