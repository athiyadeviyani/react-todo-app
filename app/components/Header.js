// Create a re-usable Header component inside the components directory

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 60
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    fontWeight: '100'
  }
});

export default Header;
