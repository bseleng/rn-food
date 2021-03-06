import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Control, Controller} from "react-hook-form";
import {SearchValue} from "../screens/SearchScreen";
import {fontSize, indent} from "../constatns/styles";


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
              onChangeText={(val) =>{
                onChange(val)
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
    marginHorizontal: indent.medium,
    marginBottom: indent.small,
  },
  input: {
    flex: 1,
    fontSize: fontSize.big,
    paddingHorizontal: indent.small,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },

  icon: {
    alignSelf: 'center',
    fontSize: 32,
    color: 'black',
    paddingLeft: indent.small,
  },
  errorWrap: {
    alignItems: 'flex-end',

  },
  errorMessage: {
    fontSize: fontSize.tiny,
    color: 'red',
  },
})

export default SearchBar