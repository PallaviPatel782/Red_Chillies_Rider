import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import RootNavigator from './src/Routing/RootNavigator';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

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
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={styles.container}>
          <RootNavigator />
          <FlashMessageWrapper />
        </View>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
