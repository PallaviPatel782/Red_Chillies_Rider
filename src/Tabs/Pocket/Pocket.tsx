import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import StatusShiftModal from '../../Components/StatusShiftModal';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Pocket = () => {
  const navigation = useNavigation<any>();

  return (
    <KeyboardAvoidWrapper>
      <View style={GlobalStyles.container}>
        <StatusShiftModal />
        <View style={styles.earningCard}>
          <Text style={styles.earningPeriod}>Earnings: 26 May - 14 Oct</Text>
          <Text style={styles.earningAmount}>₹2984.55</Text>
        </View>
        <View style={styles.sectionDivider}>
          <View style={styles.line} />
          <Text style={styles.sectionTitle}>POCKET</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.balanceBox}>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceLabel}>Pocket balance</Text>
            <Text style={styles.balanceValue}>₹1816.55</Text>
          </View>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceLabel}>Available cash limit</Text>
            <Text style={styles.balanceValue}>₹1816.55</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.withdrawButton}
          onPress={() => navigation.navigate('WithdrawScreen')}>
          <Text style={styles.withdrawText}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.statementCard}
          onPress={() => navigation.navigate('PocketStatement')}>
          <View style={styles.statementLeft}>
            <Icon name="file-text" size={18} color="#000" />
            <Text style={styles.statementText}>Pocket statements</Text>
          </View>
          <Icon name="chevron-right" size={18} color="#000" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default Pocket;

// const Pocket = () => {
//   const navigation = useNavigation<any>();
//   const [withdrawDone, setWithdrawDone] = useState(false);

//   return (
//     <KeyboardAvoidWrapper>
//       <View style={GlobalStyles.container}>
//         <StatusShiftModal />
//         <View style={styles.earningCard}>
//           <Text style={styles.earningPeriod}>Earnings: 26 May - 14 Oct</Text>
//           <Text style={styles.earningAmount}>₹2984.55</Text>
//         </View>
//         {withdrawDone && (
//           <View style={styles.infoBanner}>
//             <Text style={styles.infoText}>• You can withdraw only 1 time in a day</Text>
//           </View>
//         )}
//         <View style={styles.sectionDivider}>
//           <View style={styles.line} />
//           <Text style={styles.sectionTitle}>POCKET</Text>
//           <View style={styles.line} />
//         </View>
//         <View style={styles.balanceBox}>
//           <View style={styles.balanceRow}>
//             <Text style={styles.balanceLabel}>Pocket balance</Text>
//             <Text style={styles.balanceValue}>₹1816.55</Text>
//           </View>
//           <View style={styles.balanceRow}>
//             <Text style={styles.balanceLabel}>Available cash limit</Text>
//             <Text style={styles.balanceValue}>₹1816.55</Text>
//           </View>
//         </View>
//         <TouchableOpacity
//           style={[
//             styles.withdrawButton,
//             withdrawDone && styles.withdrawDisabled,
//           ]}
//           disabled={withdrawDone}
//           onPress={() => {
//             setWithdrawDone(true);
//             navigation.navigate('WithdrawScreen');
//           }}>
//           <Text
//             style={[
//               styles.withdrawText,
//               withdrawDone && styles.withdrawDisabledText,
//             ]}>
//             {withdrawDone ? 'Withdrawn' : 'Withdraw'}
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.statementCard}
//           onPress={() => navigation.navigate('PocketStatement')}>
//           <View style={styles.statementLeft}>
//             <Icon name="file-text" size={18} color="#000" />
//             <Text style={styles.statementText}>Pocket statements</Text>
//           </View>
//           <Icon name="chevron-right" size={18} color="#000" />
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidWrapper>
//   );
// };

// export default Pocket;

