import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from '../StackScreens/SplashScreen';
import Home from '../Tabs/Home/Home';
import Pocket from '../Tabs/Pocket/Pocket';
import Profile from '../Tabs/Profile/Profile';
import Loading from '../StackScreens/Loading/Loading';
import OtpVerification from '../StackScreens/OtpVerification/OtpVerification';
import RiderData from '../StackScreens/RiderData/RiderData';
import SearchCity from '../StackScreens/SearchCity/SearchCity';
import SearchWorkArea from '../StackScreens/SearchWorkArea/SearchWorkArea';

export type RootStackParamList = {
    Splash: undefined;
    MainTabs: undefined;
    Loading: undefined;
    OtpVerification: undefined;
    RiderData: undefined;
    SearchCity: undefined;
    SearchWorkArea: undefined;
};

export type RootTabParamList = {
    Home: undefined;
    Pocket: undefined;
    Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const MainTabs: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#e63946',
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Pocket" component={Pocket} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

const RootNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Loading'>
                <Stack.Screen name="Loading" component={Loading} />
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="OtpVerification" component={OtpVerification} />
                <Stack.Screen name="RiderData" component={RiderData} />
                <Stack.Screen name="SearchCity" component={SearchCity} />
                <Stack.Screen name="SearchWorkArea" component={SearchWorkArea} />
                <Stack.Screen name="MainTabs" component={MainTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;

const styles = StyleSheet.create({});
