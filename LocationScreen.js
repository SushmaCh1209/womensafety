import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { auth } from './FirebaseConfig'; // Import your Firebase configuration
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const LocationScreen = () => {
  const [location, setLocation] = useState(null);
  const firestore = getFirestore();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { coords } = await Location.getCurrentPositionAsync({});
    setLocation(coords);
    await storeLocation(coords);
  };

  const storeLocation = async (coords) => {
    try {
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(firestore, 'users', user.uid), {
          location: {
            latitude: coords.latitude,
            longitude: coords.longitude,
          },
        }, { merge: true });
        console.log('Location stored successfully!');
      }
    } catch (error) {
      console.error('Error storing location:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Location Screen</Text>
      {location && (
        <Text>Latitude: {location.latitude}, Longitude: {location.longitude}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default LocationScreen;
