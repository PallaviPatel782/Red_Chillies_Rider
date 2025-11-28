import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../../Components/Header';
import KeyboardAvoidWrapper from '../../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../../utils/GlobalStyles/GlobalStyles';
import styles from './styles';
import { useTranslation } from 'react-i18next';

const CannotDeliverHelpCenter = ({ navigation }: any) => {
  const { t } = useTranslation();

  const handleSelect = (reasonKey: string) => {
    navigation.navigate('HelpCenterDenyOrder', {
      selectedReason: `${t('cannotDeliver')} : ${t(reasonKey)}`,
    });
  };

  return (
    <KeyboardAvoidWrapper>
      <View style={GlobalStyles.container}>
        <Header title={t('helpCenter')} />

        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleSelect('personalEmergency')}
          >
            <Text style={styles.listText}>{t('personalEmergency')}</Text>
            <Icon name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleSelect('bikeIssue')}
          >
            <Text style={styles.listText}>{t('bikeIssue')}</Text>
            <Icon name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleSelect('metWithAccident')}
          >
            <Text style={styles.listText}>{t('metWithAccident')}</Text>
            <Icon name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <View style={styles.divider} />
        </View>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default CannotDeliverHelpCenter;
