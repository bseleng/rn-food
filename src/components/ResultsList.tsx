import React from 'react';
import {View, StyleSheet, Text, FlatList, Image} from  'react-native'

interface IProps {
  title:string;
  items?: Record<string, any>[]
}

const ResultsList = ({title, items}: IProps) => {
  if(!items || items.length === 0) {
    return  null
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index + item.price}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text>{item.name}</Text>
              <Image source={{uri: item.image_url}} style={styles.image}/>
            </View>)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18
  },
  item: {
    marginRight: 5
  },
  image: {
    width: 50
  },
})

export default ResultsList