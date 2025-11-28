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
import { useTranslation } from 'react-i18next';

interface Document {
    name: string;
    uri: string;
    type: string;
    size?: number;
}

const RiderData = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const { t } = useTranslation();

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
        { label: t("motorcycle") || "Motorcycle", value: "motorcycle" },
        { label: t("ev") || "EV", value: "ev" },
        { label: t("noVehicle") || "No Vehicle", value: "none" },
    ];


    const pickDocumentFile = async (setter: React.Dispatch<React.SetStateAction<Document | null>>) => {
        try {
            const [res] = await pick({ type: [types.allFiles] });
            if (!res) return;

            setter({
                uri: res.uri,
                name: res.name ?? t("uploadDocument"),
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
                    title={t("continue")}
                    onPress={() => navigation.navigate('BankDetials')}
                />
            }
        >
            <View style={GlobalStyles.container}>
                <Header title={t("riderDetails")} />
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        {t("fullName")} <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder={t("enterFullName")}
                        placeholderTextColor={Colors.gray}
                        value={fullName}
                        onChangeText={setFullName}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        {t("workCity")} <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TouchableOpacity
                        style={GlobalStyles.textInput}
                        onPress={() =>
                            navigation.navigate('SearchCity', {
                                onSelect: (city: string) => setWorkCity(city),
                            })
                        }
                    >
                        <Text style={{ color: Colors.gray }}>
                            {workCity || t("workCity")}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        {t("workArea")} <FontAwesome name="asterisk" color="red" size={8} />
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
                        <Text style={{ color: Colors.gray }}>
                            {workArea || t("workArea")}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        {t("chooseVehicle")} <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <Dropdown
                        style={GlobalStyles.textInput}
                        data={vehicleOptions}
                        labelField="label"
                        valueField="value"
                        placeholder={t("selectVehicle")}
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderStyle={styles.placeholderStyle}
                        value={vehicle}
                        onChange={item => setVehicle(item.value)}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        {t("idProof")} <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TouchableOpacity
                        style={[GlobalStyles.textInput, { flexDirection: 'row', justifyContent: 'space-between' }]}
                        onPress={() => pickDocumentFile(setIdDocument)}
                    >
                        <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: Colors.gray, flex: 1 }}>
                            {idDocument?.name || t("uploadDocument")}
                        </Text>
                        <FontAwesome name="camera" size={20} color={Colors.gray} />
                    </TouchableOpacity>
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        {t("drivingLicense")} <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TouchableOpacity
                        style={[GlobalStyles.textInput, { flexDirection: 'row', justifyContent: 'space-between' }]}
                        onPress={() => pickDocumentFile(setDrivingLicense)}
                    >
                        <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: Colors.gray, flex: 1 }}>
                            {drivingLicense?.name || t("uploadDocument")}
                        </Text>
                        <FontAwesome name="camera" size={20} color={Colors.gray} />
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidWrapper>
    );
};

export default RiderData;
