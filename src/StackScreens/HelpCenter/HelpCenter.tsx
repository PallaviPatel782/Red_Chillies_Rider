import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import styles from './styles';
import { useTranslation } from 'react-i18next';

const HelpCenter = ({ navigation }: any) => {
  const { t } = useTranslation();

  return (
    <KeyboardAvoidWrapper>
      <View style={GlobalStyles.container}>
        <Header title={''} />

        <View style={styles.innerContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.redLine} />
            <Text style={styles.titleText}>{t('howCanWeHelp')}</Text>
          </View>

          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate('CannotDeliverHelpCenter')}
          >
            <Text style={styles.listText}>{t('cannotDeliver')}</Text>
            <Icon name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.listItem}
            onPress={() =>
              navigation.navigate('HelpCenterDenyOrder', {
                selectedReason: t('restaurantClosedFull'), // dynamic reason
              })
            }
          >
            <Text style={styles.listText}>{t('restaurantClosed')}</Text>
            <Icon name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.listItem}
            onPress={() =>
              navigation.navigate('HelpCenterDenyOrder', {
                selectedReason: t('cantFindRestaurantFull'),
              })
            }
          >
            <Text style={styles.listText}>{t('cantFindRestaurant')}</Text>
            <Icon name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <View style={styles.divider} />
        </View>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default HelpCenter;
