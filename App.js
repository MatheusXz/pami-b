import { StyleSheet, Text, View } from 'react-native';

import Apostila3 from './src/Components/Apostila3/'


export default function App() {
  return (
    <View style={styles.container}>
      <Apostila3 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9E9E9E',
    padding: 8,
  },
});
