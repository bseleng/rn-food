import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Control, Controller} from "react-hook-form";
import {SearchValue} from "../screens/SearchScreen";


interface IProps {
  control: Control<SearchValue>
  onSubmit: () => void;
  errorMessage: string
  setErrorMessage: (errorMessage:string) => void;
}

const SearchBar = ({control, onSubmit, errorMessage, setErrorMessage}: IProps) => {
  return (
    <>
      <View style={[styles.wrap, (!!errorMessage ? styles.errorInput : {})]}>
        <AntDesign name="search1" style={styles.icon}/>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Start to explore"
              autoCapitalize={'none'}
              autoCorrect={false}
              onBlur={onBlur}
              onChangeText={() =>{
                onChange()
                setErrorMessage('')
              }}
              value={value}
              onEndEditing={onSubmit}
            />
          )}
          name="searchBar"
        />
      </View>
      {!!errorMessage && (
        <View style={styles.errorWrap}>
          <Text style={styles.errorMessage}> {errorMessage}</Text>
        </View>
      )}
    </>
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
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },

  icon: {
    alignSelf: 'center',
    fontSize: 32,
    color: 'black',
    paddingLeft: 8,
  },
  errorWrap: {
    alignItems: 'flex-end',

  },
  errorMessage: {
    fontSize: 10,
    color: 'red',
  },
})

export default SearchBar