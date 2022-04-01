import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import {fontSize} from "../constatns/styles";

interface IProps {
  name: string;
}

const ResultScreen = ({name}: IProps) => {
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