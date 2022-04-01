import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import {fontSize} from "../constatns/styles";

interface IProps {
  name: string;
  navigation: any
}

const ResultScreen = ({name, navigation}: IProps) => {
  // console.log('nav', navigation)
  console.log('nav 2', navigation.getParam('name'))
  return (
    <View>
      <Text style={styles.name}>Result Screen</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: fontSize.enormous
  }
})

export  default  ResultScreen