import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    TextInput,
} from 'react-native';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import Header from '../../Components/Header';
import Colors from '../../utils/Colors/Colors';
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const allCities = [
    'Abha', 'Al Ahsa (Hofuf)', 'Al Kharj', 'Al Lith', 'Al Majmaah', 'Al Qunfudhah',
    'Al Qurayyat', 'Al Ula', 'Amritsar', 'Ahmedabad', 'Bangalore', 'Chennai',
    'Delhi', 'Hyderabad', 'Kolkata', 'Mumbai', 'Pune', 'Surat', 'Jaipur', 'Lucknow',
    // Add all Indian cities here
];

const SearchCity = ({ navigation, route }: any) => {
    const [search, setSearch] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const filteredCities = allCities.filter(city =>
        city.toLowerCase().includes(search.toLowerCase())
    );

    const handleSelect = (city: string) => {
        setSelectedCity(city);
        if (route.params?.onSelect) route.params.onSelect(city);
        navigation.goBack();
    };

    return (
        <KeyboardAvoidWrapper>
            <Header title=" " showBack />
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={20} color={Colors.gray} style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search your work city"
                        value={search}
                        onChangeText={setSearch}
                        placeholderTextColor={Colors.gray}
                    />
                </View>
                <Text style={GlobalStyles.inputLabel}>Please select your work city <FontAwesome name="asterisk" color="red" size={8} /></Text>
                <FlatList
                    data={filteredCities}
                    scrollEnabled={false}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.cityItem,
                                item === selectedCity && styles.selectedCity,
                            ]}
                            onPress={() => handleSelect(item)}
                        >
                            <Text style={styles.cityText}>{item}</Text>
                            {item === selectedCity && (
                                <Text style={styles.checkMark}>✓</Text>
                            )}
                        </TouchableOpacity>
                    )}
                />
            </View>
        </KeyboardAvoidWrapper>
    );
};

export default SearchCity;

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: 8,
        paddingHorizontal: SW(10),
        marginVertical: SH(10),
        backgroundColor: '#fff',
    },
    searchIcon: {
        marginRight: SW(8),
    },
    searchInput: {
        flex: 1,
        fontSize: SF(12),
        fontFamily: 'Ubuntu-Regular',
        color: '#000',
        paddingVertical: SH(12),
    },

    container: {
        flex: 1,
        paddingHorizontal: SW(15),
        backgroundColor: '#fff',
    },
    cityItem: {
        paddingVertical: SH(12),
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightGray,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cityText: {
        fontSize: SF(12),
        fontFamily: "Ubuntu-Regular"
    },
    selectedCity: {
        backgroundColor: '#E6F7EA',
    },
    checkMark: {
        color: Colors.green,
        fontSize: SF(16),
        fontFamily: 'Ubuntu-Bold',
    },
});
