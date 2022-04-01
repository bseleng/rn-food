import React from 'react';
import {Image, View, Text, StyleSheet, Pressable} from "react-native";
import { Routes } from '../../App';
import {fontSize, indent} from '../constatns/styles';

interface IProps {
  name: string;
  image: string;
  rating: number;
  reviews: number
  navigate: (route: string, params?: any) => void;
}

const ResultDetails = ({name, image, rating, reviews, navigate}: IProps) => {
  const goToResult= (name:string) => {
    navigate(Routes.Result, {name})
  }
  return (
    <View style={styles.wrap}>
      <Pressable onPress={()=>goToResult(name)}>
        <Image source={{uri: image}} style={styles.image}/>
        <Text style={styles.title}> {name}</Text>
        <Text style={styles.subtitle}> {rating} Stars, {reviews} Reviews</Text>
      </Pressable>
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

export default ResultDetails