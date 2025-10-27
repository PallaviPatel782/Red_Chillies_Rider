import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import RootNavigator from './src/Routing/RootNavigator';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';

const FlashMessageWrapper = () => {
  const insets = useSafeAreaInsets();

  return (
    <FlashMessage
      position="bottom"
      style={{ marginBottom: insets.bottom }}
      floating
    />
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        <RootNavigator />
        <FlashMessageWrapper />
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
