import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions, processColor } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { BarChart } from 'react-native-charts-wrapper';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import Colors from '../../utils/Colors/Colors';
import styles from './styles';
import { SF } from '../../utils/Responsiveness/Dimensions';

const screenWidth = Dimensions.get('window').width;

const PerformanceFooter = ({ trips, hours, orders, period }: any) => (
    <View style={styles.performanceCard}>
        <View style={styles.performanceHeader}>
            <Text style={styles.performanceHeaderText}>
                Performance for {period}
            </Text>
        </View>

        <View style={styles.performanceContent}>
            <View style={styles.circleItem}>
                <View style={styles.circle}>
                    <Text style={styles.circleValue}>{trips}</Text>
                </View>
                <Text style={styles.circleLabel}>Trips</Text>
            </View>

            <View style={styles.circleItem}>
                <View style={styles.circle}>
                    <Text style={styles.circleValue}>{hours}</Text>
                </View>
                <Text style={styles.circleLabel}>Login hours</Text>
            </View>

            <View style={styles.circleItem}>
                <View style={styles.circle}>
                    <Text style={styles.circleValue}>{orders}</Text>
                </View>
                <Text style={styles.circleLabel}>Orders</Text>
            </View>
        </View>
    </View>
);


const DailyTab = () => (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.white }} contentContainerStyle={styles.tabContainer}>
        <Text style={styles.periodText}>Today:14 Oct</Text>
        <PerformanceFooter period="today" trips="10" hours="3 hrs" orders="10" />
    </ScrollView>
);

const WeeklyTab = () => (
    <ScrollView
        style={{ flex: 1, backgroundColor: Colors.white }}
        contentContainerStyle={styles.tabContainer}
    >
        <Text style={[styles.periodText]}>
            12 Oct to 19 Oct
        </Text>

        <BarChart
            style={styles.chart}
            data={{
                dataSets: [
                    {
                        values: [
                            { y: 800, x: 0 },
                            { y: 700, x: 1 },
                            { y: 210.3, x: 2 },
                            { y: 0, x: 3 },
                            { y: 0, x: 4 },
                            { y: 0, x: 5 },
                            { y: 0, x: 6 },
                        ],
                        label: '',
                        config: {
                            color: processColor('#3874FF'),
                            valueTextColor: processColor('#000'),
                            valueTextSize: 10,
                            valueFormatter: '# SAR',
                        },
                    },
                ],
            }}
            xAxis={{
                valueFormatter: [
                    '12 Oct',
                    '13 Oct',
                    '14 Oct',
                    '15 Oct',
                    '16 Oct',
                    '17 Oct',
                    '18 Oct',
                ],
                position: 'BOTTOM',
                granularityEnabled: true,
                granularity: 1,
                axisMaximum: 6.5,
                axisMinimum: -0.5,
                drawGridLines: false,
                textSize: 11,
                textColor: processColor('#8E8E8E'),
                axisLineColor: processColor('#E5E5E5'),
            }}
            yAxis={{
                left: { enabled: false },
                right: { enabled: false },
            }}
            chartDescription={{ text: '' }}
            legend={{ enabled: false }}
            animation={{ durationX: 1000 }}
            drawValueAboveBar={true}
        />

        <PerformanceFooter period="this week" trips="66" hours="6.6 hrs" orders="66" />
    </ScrollView>
);



const MonthlyTab = () => (
    <ScrollView
        style={{ flex: 1, backgroundColor: Colors.white }}
        contentContainerStyle={styles.tabContainer}
    >
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={[styles.periodText]}>
                Oct 2025 ▼
            </Text>
        </View>

        <BarChart
            style={styles.chart}
            data={{
                dataSets: [
                    {
                        values: [
                            { y: 800, x: 0 },
                            { y: 700, x: 1 },
                            { y: 400, x: 2 },
                            { y: 500, x: 3 },
                            { y: 300, x: 4 },
                            { y: 610.3, x: 5 },
                            { y: 610.3, x: 6 },
                        ],
                        label: '',
                        config: {
                            colors: [
                                processColor('#3874FF'),
                                processColor('#3874FF'),
                                processColor('#3874FF'),
                                processColor('#3874FF'),
                                processColor('#3874FF'),
                                processColor('#3874FF'),
                                processColor('#26662F'),
                            ],
                            valueTextColor: processColor('#000'),
                            valueTextSize: 9,
                            valueFormatter: '#.## SAR',
                            drawValues: true,
                        },
                    },
                ],
            }}
            xAxis={{
                valueFormatter: [
                    '1–30 Apr',
                    '1–31 May',
                    '1–30 Jun',
                    '1–31 Jul',
                    '1–31 Aug',
                    '1–30 Sep',
                    '1–14 Oct',
                ],
                position: 'BOTTOM',
                granularityEnabled: true,
                granularity: 1,
                axisMaximum: 6.6, // ✅ little more room on right
                axisMinimum: -0.4, // ✅ little more room on left
                drawGridLines: false,
                textSize: 9,
                textColor: processColor('#8E8E8E'),
                axisLineColor: processColor('#E5E5E5'),
                labelRotationAngle: 0,
            }}
            yAxis={{
                left: {
                    enabled: false,
                    axisMaximum: 900, // ✅ prevents top cut
                },
                right: { enabled: false },
            }}
            animation={{ durationX: 1000 }}
            chartDescription={{ text: '' }}
            legend={{ enabled: false }}
            drawValueAboveBar={true}
        />



        <PerformanceFooter period="this month" trips="121" hours="125 hrs" orders="121" />
    </ScrollView>
);


const renderScene = SceneMap({
    daily: DailyTab,
    weekly: WeeklyTab,
    monthly: MonthlyTab,
});

const PayoutScreen = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'daily', title: 'Daily' },
        { key: 'weekly', title: 'Weekly' },
        { key: 'monthly', title: 'Monthly' },
    ]);

    return (
        <KeyboardAvoidWrapper>
            <View style={[GlobalStyles.container, { flex: 1, backgroundColor: Colors.white }]}>
                <Header title="Payouts" />
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: screenWidth }}
                    renderTabBar={props => (
                        <TabBar
                            {...props}
                            indicatorStyle={{ backgroundColor: Colors.red, height: 3, borderRadius: 2 }}
                            style={{ backgroundColor: Colors.white }}
                            activeColor={Colors.red}
                            inactiveColor="#000"
                        />
                    )}
                    style={{ backgroundColor: Colors.white }}
                />
            </View>
        </KeyboardAvoidWrapper>
    );
};

export default PayoutScreen;
