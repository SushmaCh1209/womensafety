// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Auth'); // Navigate to the Auth screen after 2 seconds
    }, 2000); // Adjust timing as needed
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/sakhi.jpeg')} style={styles.logo} />
      <Text style={styles.appName}>SAKHI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Change background color if needed
  },
  logo: {
    width: 150, // Adjust width and height according to your logo
    height: 150,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default SplashScreen;
