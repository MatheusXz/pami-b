import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Apostila3 from './src/Components/Apostila3/'
import Apostila4 from './src/Components/Apostila4/'
import Apostila5 from './src/Components/Apostila5/'


export default function App() {
  return (
    <View style={styles.container}>
      <Apostila5 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9E9E9E',
    padding: 8,
    // paddingTop: Constants.statusBarHeight,
  },
});
