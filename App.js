import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Apostila3 from './src/Components/Apostila3/'
import Apostila4 from './src/Components/Apostila4/'
import Apostila5 from './src/Components/Apostila5/'
import Calc from './src/Components/Calc/'
import Apostila6 from './src/Components/Apostila6/'


export default function App() {
  return (
    <View style={styles.container}>
      <Apostila6 />
      {/* <Calc/> */}
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
