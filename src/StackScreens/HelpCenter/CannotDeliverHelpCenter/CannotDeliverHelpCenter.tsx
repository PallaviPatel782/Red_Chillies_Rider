import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../../Components/Header';
import KeyboardAvoidWrapper from '../../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../../utils/GlobalStyles/GlobalStyles';
import styles from './styles';

const CannotDeliverHelpCenter = ({ navigation }: any) => {
    const handleSelect = (reason: any) => {
        navigation.navigate('HelpCenterDenyOrder', {
            selectedReason: `Cannot Deliver : ${reason}`,
        });
    };

    return (
        <KeyboardAvoidWrapper>
            <View style={GlobalStyles.container}>
                <Header title={'Help Center'} />

                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => handleSelect('Personal Emergency')}
                    >
                        <Text style={styles.listText}>Personal Emergency</Text>
                        <Icon name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => handleSelect('Bike issue')}
                    >
                        <Text style={styles.listText}>Bike issue</Text>
                        <Icon name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => handleSelect('Met with an accident')}
                    >
                        <Text style={styles.listText}>Met with an accident</Text>
                        <Icon name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <View style={styles.divider} />
                </View>
            </View>
        </KeyboardAvoidWrapper>
    );
};

export default CannotDeliverHelpCenter;
