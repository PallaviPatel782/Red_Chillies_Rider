import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import RootNavigator from './src/Routing/RootNavigator';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import { Provider, useDispatch } from 'react-redux';
import { store } from './src/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setInitialLanguage } from './src/redux/slices/languageSlice';
import i18n from './i18n.config';

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

const LanguageLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadLang = async () => {
      const savedLang = await AsyncStorage.getItem("appLanguage");

      if (savedLang) {
        i18n.changeLanguage(savedLang);
        dispatch(setInitialLanguage(savedLang));

        // ⚠️ If you add RTL logic later, call it here too:
        // applyRTLSettings(savedLang);
      }
    };

    loadLang();
  }, []);

  return null;
};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <LanguageLoader />

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
