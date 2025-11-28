import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper'
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles'
import LanguageModal from '../../Components/LanguageModal'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTranslation } from 'react-i18next'
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions'
import Colors from '../../utils/Colors/Colors'

const Settings = ({ navigation }: any) => {
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation();

    return (
        <KeyboardAvoidWrapper>
            <View style={GlobalStyles.container}>
                <Header title={t('settings')} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.sectionTitle}>{t('general')}</Text>
                    <TouchableOpacity style={styles.row} onPress={() => setShowModal(true)}>
                        <View style={styles.rowLeft}>
                            <Icon name="language-outline" size={22} color="#333" />
                            <Text style={styles.rowText}>{t('changeLanguage')}</Text>
                        </View>
                        <Icon name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                </ScrollView>
                <LanguageModal visible={showModal} onClose={() => setShowModal(false)} />
            </View>
        </KeyboardAvoidWrapper>
    )
}

export default Settings

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: SF(14),
        fontFamily: "Ubuntu-Bold",
        color: '#666',
        paddingHorizontal: SW(10),
        paddingVertical: SH(5),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SW(15),
        paddingVertical: SH(12),
        borderTopWidth: 0.5,
        borderColor: '#ddd',
    },
    rowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    rowText: {
        fontSize: SF(15),
        color: '#000',
        fontFamily: "Ubuntu-Regular"
    }
});
