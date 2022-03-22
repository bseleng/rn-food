import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Control, Controller} from "react-hook-form";
import {SearchValue} from "../screens/SearchScreen";


interface IProps {
  control: Control<SearchValue>
  onSubmit: () => void;
}

const SearchBar = ({control, onSubmit}:IProps) => {
  return(
    <View style={styles.wrap}>
      <AntDesign name="search1" style={styles.icon} />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Start to explore"
            autoCapitalize={'none'}
            autoCorrect={false}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            onEndEditing={onSubmit}
          />
        )}
        name="searchBar"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: '#dadada',
    borderRadius: 8,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  icon: {
    alignSelf: 'center',
    fontSize: 32,
    color: 'black',
    paddingLeft: 8,

  }
})

export default SearchBar