import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SearchScreen = () => {
  return(
    <View>
      <Text style={styles.title}> Search Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  }
})

export default SearchScreen