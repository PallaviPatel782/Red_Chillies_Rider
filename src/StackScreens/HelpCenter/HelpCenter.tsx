import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import styles from './styles';

const HelpCenter = ({ navigation }: any) => {
    return (
        <KeyboardAvoidWrapper>
            <View style={GlobalStyles.container}>
                <Header title={''} />

                <View style={styles.innerContainer}>
                    <View style={styles.titleContainer}>
                        <View style={styles.redLine} />
                        <Text style={styles.titleText}>How can we help</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => navigation.navigate('CannotDeliverHelpCenter')}
                    >
                        <Text style={styles.listText}>Cannot Deliver</Text>
                        <Icon name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() =>
                            navigation.navigate('HelpCenterDenyOrder', {
                                selectedReason: 'Cannot Deliver : Restaurant is closed',
                            })
                        }
                    >
                        <Text style={styles.listText}>Restaurant is closed</Text>
                        <Icon name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() =>
                            navigation.navigate('HelpCenterDenyOrder', {
                                selectedReason: 'Cannot Deliver : Can’t find restaurant',
                            })
                        }
                    >
                        <Text style={styles.listText}>Can’t find restaurant</Text>
                        <Icon name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <View style={styles.divider} />
                </View>
            </View>
        </KeyboardAvoidWrapper>
    );
};

export default HelpCenter;
