import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from '../../Components/Header';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import styles from './styles';

const About = () => {
    return (
        <KeyboardAvoidWrapper>
            <View style={[GlobalStyles.container]}>
                <Header title={'About'} />
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../assests/Images/Logo.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.paragraph}>
                        Welcome to <Text style={styles.title}>Red Chillies Rider</Text> – your trusted delivery partner on the go! We’re
                        dedicated to ensuring
                        that every order from Red Chillies reaches customers fresh, fast, and safely.
                        Our riders are the heartbeat of our service, delivering food with care and commitment — because every delivery matters.
                    </Text>
                    <Text style={styles.highlight}>
                        Ride with Red Chillies Rider — Deliver Happiness, One Order at a Time!
                    </Text>

                    <Text style={styles.subheading}>We provide riders with an easy-to-use app that helps them:</Text>
                    <View style={styles.listContainer}>
                        <Text style={styles.listItem}>• Accept and manage delivery orders smoothly</Text>
                        <Text style={styles.listItem}>• Track delivery routes in real time</Text>
                        <Text style={styles.listItem}>• Communicate instantly with customers and support</Text>
                        <Text style={styles.listItem}>• Track earnings and delivery performance transparently</Text>
                    </View>

                    <Text style={styles.paragraph}>
                        Our mission is to empower riders through technology, fair opportunities, and flexible work —
                        while ensuring customers get a seamless delivery experience every time.
                    </Text>
                </ScrollView>
            </View>
        </KeyboardAvoidWrapper>
    );
};

export default About;
