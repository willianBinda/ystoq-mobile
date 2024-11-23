import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Nav } from '../../components/organisms';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageHeader}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
      </View>
      <View style={styles.body}>
        <Nav />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imageHeader: {
    alignItems: 'center',
    // borderWidth: 1,
  },
  image: {
    width: 40,
    height: 40,
  },
  body: {},
});
