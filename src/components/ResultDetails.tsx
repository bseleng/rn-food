import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {fontSize, indent} from '../constatns/styles';
import {withNavigation} from "react-navigation";
import {Routes} from '../constatns/routes';

interface IProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number
  navigation?: { navigate: (route: string, params: {}) => void }
}

const ResultDetails = ({id, name, image, rating, reviews, navigation}: IProps) => {
  const goToResult = () => {
    navigation && navigation.navigate(Routes.Result, {id})
  }
  return (
    <View style={styles.wrap}>
      <TouchableOpacity onPress={() => goToResult()}>
        <Image source={{uri: image}} style={styles.image}/>
      </TouchableOpacity>
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
    height: 180,
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

export default withNavigation(ResultDetails)