import React from 'react';
import {Image, View, Text, StyleSheet} from "react-native";
import {fontSize, indent} from '../constatns/styles';

interface IProps {
  name: string;
  image: string;
  rating: number;
  reviews: number
}

const ResultDetails = ({name, image, rating, reviews}: IProps) => {
  return (
    <View style={styles.wrap}>
      <Image source={{uri: image}} style={styles.image}/>
      <Text style={styles.title}> {name}</Text>
      <Text style={styles.subtitle}> {rating} Stars, {reviews} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: indent.small,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: indent.medium

  },
  wrap: {
    flex: 1,
    marginTop: indent.small,
  },
  image: {
    height: 120,
    width: 250,
    marginLeft: indent.medium,
    borderRadius: 4,
  },
  subtitle: {
    color: 'gray',
    fontSize: fontSize.small,
    fontWeight: '200',
    marginLeft: indent.medium

  }
})

export default ResultDetails