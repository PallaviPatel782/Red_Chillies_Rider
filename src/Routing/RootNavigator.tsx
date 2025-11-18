import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SplashScreen from '../StackScreens/SplashScreen/SplashScreen';
import Home from '../Tabs/Home/Home';
import Pocket from '../Tabs/Pocket/Pocket';
import Profile from '../Tabs/Profile/Profile';
import Loading from '../StackScreens/Loading/Loading';
import OtpVerification from '../StackScreens/OtpVerification/OtpVerification';
import RiderData from '../StackScreens/RiderData/RiderData';
import SearchCity from '../StackScreens/SearchCity/SearchCity';
import SearchWorkArea from '../StackScreens/SearchWorkArea/SearchWorkArea';
import BankDetials from '../StackScreens/BankDetial/BankDetials';
import Selfi from '../StackScreens/Selfi/selfi';
import { SH, SF, SW } from '../utils/Responsiveness/Dimensions';
import About from '../StackScreens/About/About';
import ChangeBankAccount from '../StackScreens/ChangeBankAccount/ChangeBankAccount';
import SendFeedBack from '../StackScreens/FeedBack/SendFeedBack';
import ReportIssue from '../StackScreens/ReportIssue/ReportIssue';
import YourProfile from '../StackScreens/YourProfile/YourProfile';
import HelpCenter from '../StackScreens/HelpCenter/HelpCenter';
import HelpCenterDenyOrder from '../StackScreens/HelpCenter/HelpCenterDenyOrder/HelpCenterDenyOrder'
import CannotDeliverHelpCenter from '../StackScreens/HelpCenter/CannotDeliverHelpCenter/CannotDeliverHelpCenter';
import WithdrawScreen from '../StackScreens/Withdraw/WithdrawScreen';
import WithdrawSucessfully from '../StackScreens/WithdrawSucessfully/WithdrawSucessfully';
import PocketStatement from '../StackScreens/PocketStatement/PocketStatement';
import PayoutScreen from '../StackScreens/PayoutScreen/PayoutScreen';
import ReachVerification from '../StackScreens/ReachVerification/ReachVerification';
import PickOrder from '../StackScreens/PickOrder/PickOrder';
import DropOrder from '../StackScreens/DropOrder/DropOrder';
import CashOnDelivery from '../StackScreens/CashOnDelivery/CashOnDelivery';
import DeliveryComplete from '../StackScreens/DeliveryComplete/DeliveryComplete';
import PastTrips from '../StackScreens/PastTrips/PastTrips';
import ChatScreen from '../StackScreens/ChatScreen/ChatScreen';
import TripHistory from '../StackScreens/TripHistory/TripHistory';
import LiveOrderHelp from '../StackScreens/HelpCenter/LiveOrderHelp/LiveOrderHelp';

export type RootStackParamList = {
    Splash: undefined;
    MainTabs: undefined;
    Loading: undefined;
    OtpVerification: undefined;
    RiderData: undefined;
    SearchCity: undefined;
    SearchWorkArea: undefined;
    BankDetials: undefined;
    selfi: undefined;
    About: undefined;
    ChangeBankAccount: undefined;
    SendFeedBack: undefined;
    ReportIssue: undefined;
    YourProfile: undefined;
    HelpCenter: undefined;
    LiveOrderHelp: undefined;
    HelpCenterDenyOrder: undefined;
    CannotDeliverHelpCenter: undefined;
    WithdrawScreen: undefined;
    WithdrawSucessfully: undefined;
    PocketStatement: undefined;
    PastTrips: undefined;
    PayoutScreen: undefined;
    ReachVerification: { tripData: any };
    PickOrder: { tripData: any };
    DropOrder: { tripData: any };
    ChatScreen: undefined;
    CashOnDelivery: { tripData: any };
    TripHistory: undefined;
    DeliveryComplete: { tripData: any };
};

export type RootTabParamList = {
    Home: undefined;
    Pocket: undefined;
    Profile: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const MainTabs: React.FC = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#e63946',
                tabBarInactiveTintColor: '#3c3c3c',
                tabBarStyle: {
                    height: SH(65) + insets.bottom,
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    elevation: 10,
                },
                tabBarLabelStyle: {
                    fontSize: SF(12),
                    fontFamily: 'Ubuntu-Medium',
                    marginVertical: SH(5)
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = 'home-outline';

                    if (route.name === 'Home') iconName = 'home-outline';
                    else if (route.name === 'Pocket') iconName = 'wallet-outline';
                    else if (route.name === 'Profile') iconName = 'account-outline';

                    return (
                        <View style={{ alignItems: 'center' }}>
                            {focused && (
                                <View
                                    style={{
                                        position: 'absolute',
                                        top: -5,
                                        width: SW(80),
                                        height: SH(4),
                                        borderBottomLeftRadius: 10,
                                        borderBottomRightRadius: 10,
                                        backgroundColor: '#e63946',
                                    }}
                                />
                            )}
                            <Icon
                                name={iconName}
                                size={26}
                                color={focused ? '#e63946' : '#3c3c3c'}
                                style={{ marginTop: 8 }}
                            />
                        </View>
                    );
                },
            })}
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
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Loading"
                // initialRouteName="MainTabs"
            >
                <Stack.Screen name="Loading" component={Loading} />
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="OtpVerification" component={OtpVerification} />
                <Stack.Screen name="RiderData" component={RiderData} />
                <Stack.Screen name="SearchCity" component={SearchCity} />
                <Stack.Screen name="SearchWorkArea" component={SearchWorkArea} />
                <Stack.Screen name="BankDetials" component={BankDetials} />
                <Stack.Screen name="selfi" component={Selfi} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="ChangeBankAccount" component={ChangeBankAccount} />
                <Stack.Screen name="SendFeedBack" component={SendFeedBack} />
                <Stack.Screen name="ReportIssue" component={ReportIssue} />
                <Stack.Screen name="HelpCenter" component={HelpCenter} />
                <Stack.Screen name="HelpCenterDenyOrder" component={HelpCenterDenyOrder} />
                <Stack.Screen name="CannotDeliverHelpCenter" component={CannotDeliverHelpCenter} />
                <Stack.Screen name="WithdrawScreen" component={WithdrawScreen} />
                <Stack.Screen name="WithdrawSucessfully" component={WithdrawSucessfully} />
                <Stack.Screen name="PocketStatement" component={PocketStatement} />
                <Stack.Screen name="PayoutScreen" component={PayoutScreen} />
                <Stack.Screen name="ReachVerification" component={ReachVerification} />
                <Stack.Screen name="PickOrder" component={PickOrder} />
                <Stack.Screen name="DropOrder" component={DropOrder} />
                <Stack.Screen name="CashOnDelivery" component={CashOnDelivery} />
                <Stack.Screen name="DeliveryComplete" component={DeliveryComplete} />
                <Stack.Screen name="PastTrips" component={PastTrips} />
                <Stack.Screen name="TripHistory" component={TripHistory} />
                <Stack.Screen name="ChatScreen" component={ChatScreen} />
                <Stack.Screen name="LiveOrderHelp" component={LiveOrderHelp} />
                <Stack.Screen name="YourProfile" component={YourProfile} />
                <Stack.Screen name="MainTabs" component={MainTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;

const styles = StyleSheet.create({});
