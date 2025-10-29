import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../Components/Header';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import CustomButton from '../../Components/CustomButton';
import { pick, types } from '@react-native-documents/picker';
import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';
import { showMessage } from 'react-native-flash-message';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';

interface Document {
    name: string;
    uri: string;
    type: string;
    size?: number;
}

const RiderData = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();

    const [fullName, setFullName] = useState('');
    const [workCity, setWorkCity] = useState('');
    const [workArea, setWorkArea] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [idDocument, setIdDocument] = useState<Document | null>(null);
    const [drivingLicense, setDrivingLicense] = useState<Document | null>(null);

    useEffect(() => {
        if (route.params?.selectedCity) {
            setWorkCity(route.params.selectedCity);
        }
        if (route.params?.selectedArea) {
            setWorkArea(route.params.selectedArea);
        }
    }, [route.params]);

    const vehicleOptions = [
        { label: 'Motorcycle/Scooty', value: 'motorcycle' },
        { label: 'Electric Vehicle (EV)', value: 'ev' },
        { label: "I don’t have a vehicle", value: 'none' },
    ];

    const pickDocumentFile = async (setter: React.Dispatch<React.SetStateAction<Document | null>>) => {
        try {
            const [res] = await pick({ type: [types.allFiles] });
            if (!res) return;

            setter({
                uri: res.uri,
                name: res.name ?? 'Unnamed Document',
                type: res.type || 'application/pdf',
                size: res.size ?? undefined
            });
        } catch (err: any) {
            if (err?.code === 'canceled') return;
            showMessage({
                message: "Error picking document",
                description: err.message || 'Unknown error',
                type: "danger",
                duration: 4000,
            });
        }
    };

    return (
        <KeyboardAvoidWrapper
            bottomComponent={
                <CustomButton
                    title="Continue"
                    onPress={() => {
                        navigation.navigate('BankDetials');
                    }}
                />
            }
        >

            <View style={GlobalStyles.container}>
                <Header title="Rider Details" />
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        User Full Name <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder="Enter your full name"
                        placeholderTextColor={Colors.gray}
                        value={fullName}
                        onChangeText={setFullName}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        Please select your work city <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TouchableOpacity
                        style={GlobalStyles.textInput}
                        onPress={() =>
                            navigation.navigate('SearchCity', {
                                onSelect: (city: string) => setWorkCity(city),
                            })
                        }
                    >
                        <Text style={{ color: Colors.gray }}>{workCity || 'Select City'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        Please select your work area <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TouchableOpacity
                        style={GlobalStyles.textInput}
                        onPress={() =>
                            navigation.navigate('SearchWorkArea', {
                                city: workCity,
                                onSelect: (area: string) => setWorkArea(area),
                            })
                        }
                    >
                        <Text style={{ color: Colors.gray }}>{workArea || 'Select Area'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        Choose Vehicle <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <Dropdown
                        style={GlobalStyles.textInput}
                        data={vehicleOptions}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Vehicle"
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderStyle={styles.placeholderStyle}
                        value={vehicle}
                        onChange={item => setVehicle(item.value)}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        ID / Address Proof <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TouchableOpacity
                        style={[
                            GlobalStyles.textInput,
                            {
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            },
                        ]}
                        onPress={() => pickDocumentFile(setIdDocument)}
                    >
                        <Text
                            style={{ color: Colors.gray, flex: 1, marginRight: SW(10) }}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {idDocument?.name ?? 'Upload Document'}
                        </Text>
                        <FontAwesome name="camera" size={20} color={Colors.gray} />
                    </TouchableOpacity>
                </View>

                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        Driving License <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TouchableOpacity
                        style={[
                            GlobalStyles.textInput,
                            {
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            },
                        ]}
                        onPress={() => pickDocumentFile(setDrivingLicense)}
                    >
                        <Text
                            style={{ color: Colors.gray, flex: 1, marginRight: SW(10) }}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {drivingLicense?.name ?? 'Upload Document'}
                        </Text>
                        <FontAwesome name="camera" size={20} color={Colors.gray} />
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidWrapper>
    );
};

export default RiderData;
