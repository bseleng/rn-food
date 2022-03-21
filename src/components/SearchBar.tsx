import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = () => {
  return(
    <View style={styles.wrap}>
      <AntDesign name="search1" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Start to explore"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: '#dadada',
    borderRadius: 8,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  icon: {
    alignSelf: 'center',
    fontSize: 32,
    color: 'black',
    paddingLeft: 8,

  }
})

export default SearchBar