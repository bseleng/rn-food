import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import {fontSize} from "../constatns/styles";

interface IProps {
  navigation: {
    getParam: ((paramName:string) => string)
  }
}

const ResultScreen = ({navigation}: IProps) => {
  const businessesId = navigation.getParam('id')
  return (
    <View>
      <Text style={styles.name}>Result Screen</Text>
      <Text style={styles.name}>{businessesId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: fontSize.enormous
  }
})

export  default  ResultScreen