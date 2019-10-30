import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import icon from '../../assets/icon.png';
import styles from '../DrawerHeader/styles';

export const DrawerHeader = (props) => {

	return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.headerImage} source={icon} />
      </View>
    </SafeAreaView>
  );
};

export default DrawerHeader;