import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import DrawerNavigator from '../../navigation/DrawerNavigator';
import Home from '../Home/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <DrawerNavigator/>
    </View>
  );
}