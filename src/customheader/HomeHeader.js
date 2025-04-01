import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Logo */}
      <Image
        source={require('../img/logo2.png')} // Thay bằng link hoặc file logo thực tế
        style={styles.logo}
      />

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
});

export default CustomHeader;
