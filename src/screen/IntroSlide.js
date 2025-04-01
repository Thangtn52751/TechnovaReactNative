import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';


const App = ({ navigation }) => {
    
    const handleLogin = () => {
        navigation.navigate('Login')
    }
  return (
    <Swiper
      loop={false}
      showsPagination={true}
      activeDotStyle={styles.activeDot}
      dotStyle={styles.dot}
    >
      {/* Slide 1 */}
      <View style={styles.slide}>
        <Image source={require('../img/intro1.png')} style={styles.image} />
        <Text style={styles.title}>Discover the Latest Gadgets</Text>
        <Text style={styles.subtitle}>
        Stay ahead with our extensive range of the latest electronics, from smartphones to smartwatches and more.
        </Text>
      </View>

      {/* Slide 2 */}
      <View style={styles.slide}>
        <Image source={require('../img/intro2.png')} style={styles.image} />
        <Text style={styles.title}>Customize Your Tech Experience</Text>
        <Text style={styles.subtitle}>
        Choose from a variety of options to personalize your devices and make them truly yours.
        </Text>
      </View>

      {/* Slide 3 */}
      <View style={styles.slide}>
        <Image source={require('../img/intro3.png')} style={styles.image} />
        <Text style={styles.title}>Seamless Shopping Experience</Text>
        <Text style={styles.subtitle}>
        Enjoy hassle-free shopping with our user-friendly platform, ensuring fast and secure delivery of your tech needs.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>Get your GADGETS TODAY</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#163b6d',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: '#ccc',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#163b6d',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
});

export default App;
