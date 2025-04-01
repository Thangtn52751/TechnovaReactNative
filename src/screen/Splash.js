import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
        navigation.navigate('Intro')
        }, 3000)
    }, [])
    
  return (
    <View style={styles.container}>
      <Image
      source={require('../img/logo1.png')}
      style={styles.logoimg}
      ></Image>
    </View>
  )
}

export default splash

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoimg: {
      width: 200,
      height: 200,
    }
  
})
//================================