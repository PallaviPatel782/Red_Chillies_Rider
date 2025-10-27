import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import RootNavigator from './src/Routing/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
