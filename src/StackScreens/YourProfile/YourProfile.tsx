import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView, Modal
} from 'react-native';
import ImagePicker, { Image as PickerImage } from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';

// Dummy Image
const dummyProfile = require('../../assests/Images/ProfilePic.png');

type RootStackParamList = {
    SearchCity: { onSelect: (city: string) => void };
    SearchWorkArea: { city: string; onSelect: (area: string) => void };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface UploadedImage {
    uri: string;
}

const YourProfile: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();

    const [name, setName] = useState('Samruddhi Bansod');
    const [mobile, setMobile] = useState('+91-1234567890');
    const [workCity, setWorkCity] = useState('');
    const [workArea, setWorkArea] = useState('');
    const [vehicle, setVehicle] = useState<string | null>(null);
    const [profileImage, setProfileImage] = useState<UploadedImage | null>(null);
    const [idImage, setIdImage] = useState<UploadedImage | null>(null);
    const [dlImage, setDlImage] = useState<UploadedImage | null>(null);
    const [visibleModal, setVisibleModal] = useState(false);
    const [targetSetter, setTargetSetter] = useState<React.Dispatch<React.SetStateAction<UploadedImage | null>> | null>(null);

    const vehicleOptions = [
        { label: 'Motorcycle/Scooty', value: 'Motorcycle/Scooty' },
        { label: 'Car', value: 'Car' },
        { label: 'Bicycle', value: 'Bicycle' },
    ];

    const openImageModal = (setter: React.Dispatch<React.SetStateAction<UploadedImage | null>>) => {
        setTargetSetter(() => setter);
        setVisibleModal(true);
    };

    const pickFromCamera = () => {
        if (!targetSetter) return;
        ImagePicker.openCamera({
            width: 400,
            height: 400,
            cropping: true,
            compressImageQuality: 0.8,
        })
            .then((image: PickerImage) => targetSetter({ uri: image.path }))
            .catch(() => { })
            .finally(() => setVisibleModal(false));
    };

    const pickFromGallery = () => {
        if (!targetSetter) return;
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
            compressImageQuality: 0.8,
        })
            .then((image: PickerImage) => targetSetter({ uri: image.path }))
            .catch(() => { })
            .finally(() => setVisibleModal(false));
    };

    const removeImage = (setter: React.Dispatch<React.SetStateAction<UploadedImage | null>>) => setter(null);

    const onUpdate = () => {
        console.log('Profile Updated', {
            name,
            mobile,
            workCity,
            workArea,
            vehicle,
            images: {
                profile: profileImage?.uri,
                id: idImage?.uri,
                dl: dlImage?.uri,
            },
        });
    };

    return (
        <KeyboardAvoidWrapper>
            <ScrollView contentContainerStyle={GlobalStyles.container}>
                <Header title={'Your Profile'} />
                <View style={styles.profileWrap}>
                    <Image
                        source={profileImage ? { uri: profileImage.uri } : dummyProfile}
                        style={styles.profileImage}
                    />
                    <TouchableOpacity
                        style={styles.cameraBtn}
                        onPress={() => openImageModal(setProfileImage)}
                    >
                        <MaterialCommunityIcons name="camera" size={22} color="#e85a6e" />
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={GlobalStyles.textInputContainer}>
                        <Text style={GlobalStyles.inputLabel}>
                            Name <FontAwesome name="asterisk" color="red" size={8} />
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            value={name}
                            onChangeText={setName}
                            placeholder="Enter Name"
                        />

                    </View>
                    <View style={GlobalStyles.textInputContainer}>
                        <Text style={GlobalStyles.inputLabel}>
                            Mobile <FontAwesome name="asterisk" color="red" size={8} />
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            value={mobile}
                            onChangeText={setMobile}
                            keyboardType="phone-pad"
                            placeholder="Enter Mobile Number"
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
                            <Text style={{ color: workCity ? '#000' : '#888' }}>
                                {workCity || 'Select City'}
                            </Text>
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
                            <Text style={{ color: workArea ? '#000' : '#888' }}>
                                {workArea || 'Select Area'}
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={GlobalStyles.textInputContainer}>
                        <Text style={GlobalStyles.inputLabel}>Choose Vehicle</Text>
                        <Dropdown
                            style={[GlobalStyles.textInput, { paddingHorizontal: 10 }]}
                            data={vehicleOptions}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Vehicle"
                            value={vehicle}
                            onChange={(item) => setVehicle(item.value)}
                        />
                    </View>
                    <View style={GlobalStyles.textInputContainer}>
                        <Text style={[GlobalStyles.inputLabel]}>ID / Address Proof</Text>
                        <View style={styles.docBox}>
                            {idImage ? (
                                <>
                                    <Image source={{ uri: idImage.uri }} style={styles.docThumb} />
                                    <TouchableOpacity style={styles.removeBtn} onPress={() => removeImage(setIdImage)}>
                                        <MaterialCommunityIcons name="close" size={18} color="#000" />
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <TouchableOpacity style={styles.uploadPlaceholder} onPress={() => openImageModal(setIdImage)}>
                                    <MaterialCommunityIcons name="camera-plus" size={32} color="#aaa" />
                                    <Text style={styles.uploadText}>Upload</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                    <View style={GlobalStyles.textInputContainer}>
                        <Text style={[GlobalStyles.inputLabel]}>Driving License</Text>
                        <View style={styles.docBox}>
                            {dlImage ? (
                                <>
                                    <Image source={{ uri: dlImage.uri }} style={styles.docThumb} />
                                    <TouchableOpacity style={styles.removeBtn} onPress={() => removeImage(setDlImage)}>
                                        <MaterialCommunityIcons name="close" size={18} color="#000" />
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <TouchableOpacity style={styles.uploadPlaceholder} onPress={() => openImageModal(setDlImage)}>
                                    <MaterialCommunityIcons name="camera-plus" size={32} color="#aaa" />
                                    <Text style={styles.uploadText}>Upload</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.updateBtn} onPress={onUpdate}>
                    <Text style={styles.updateBtnText}>Update Profile</Text>
                </TouchableOpacity>

                <View style={{ height: 40 }} />
                <Modal
                    visible={visibleModal}
                    transparent
                    animationType="slide"
                    onRequestClose={() => setVisibleModal(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalBox}>
                            <Text style={styles.modalTitle}>Upload Image</Text>

                            <TouchableOpacity style={styles.modalBtn} onPress={pickFromCamera}>
                                <MaterialCommunityIcons name="camera" size={20} color="#e85a6e" />
                                <Text style={styles.modalBtnText}>Take Photo</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalBtn} onPress={pickFromGallery}>
                                <MaterialCommunityIcons name="image" size={20} color="#e85a6e" />
                                <Text style={styles.modalBtnText}>Choose from Gallery</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.modalBtn, { borderTopWidth: 1, borderColor: '#eee' }]}
                                onPress={() => setVisibleModal(false)}
                            >
                                <Text style={[styles.modalBtnText, { color: 'red' }]}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </KeyboardAvoidWrapper>
    );
};

export default YourProfile;
