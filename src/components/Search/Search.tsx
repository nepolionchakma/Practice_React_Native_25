import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../Button/Button';

const Search = () => {
  return (
    <Button style={styles.search}>
      <Image source={require('../../Assets/img/search.png')} />
    </Button>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {backgroundColor: 'gray', width: 30, height: 30},
});
