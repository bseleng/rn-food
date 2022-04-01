import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native'
import ResultDetails from "./ResultDetails";
import {fontSize, indent} from "../constatns/styles";

interface IProps {
  title:string;
  items?: Record<string, any>[];
  navigate: (route: string) => void;
}

const ResultsList = ({title, items, navigate}: IProps) => {
  if(!items || items.length === 0) {
    return  null
  }
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ResultDetails
            name={item.name}
            image={item.image_url}
            rating={item.rating}
            reviews={item.review_count}
            navigate={navigate}
          />)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: indent.small,
  },
  title: {
    fontSize: fontSize.giant,
    fontWeight: 'bold',
    marginLeft: indent.medium
  },
})

export default ResultsList