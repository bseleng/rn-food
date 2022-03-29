import React from 'react';
import {View, StyleSheet, Text} from  'react-native'

interface IProps {
  title:string;
}

const ResultsList = ({title}: IProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18
  }
})

export default ResultsList