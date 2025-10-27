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

// Updated Work Areas list
const allWorkAreas = [
  'Al Dhahab',
  'Al-Hanish',
  'Al Muftaha Village',
  'Al-Nusab (or Al-Nasb)',
  'Al-Qura',
  // Add more work areas here
];

const SearchWorkArea = ({ navigation, route }: any) => {
  const [search, setSearch] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  const filteredAreas = allWorkAreas.filter(area =>
    area.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (area: string) => {
    setSelectedArea(area);
    if (route.params?.onSelect) route.params.onSelect(area);
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
            placeholder="Search your work area"
            value={search}
            onChangeText={setSearch}
            placeholderTextColor={Colors.gray}
          />
        </View>

        <Text style={GlobalStyles.inputLabel}>
          Please select your work area <FontAwesome name="asterisk" color="red" size={8} />
        </Text>

        <FlatList
          data={filteredAreas}
          scrollEnabled={false}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.cityItem,
                item === selectedArea && styles.selectedCity,
              ]}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.cityText}>{item}</Text>
              {item === selectedArea && (
                <Text style={styles.checkMark}>✓</Text>
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default SearchWorkArea;

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
