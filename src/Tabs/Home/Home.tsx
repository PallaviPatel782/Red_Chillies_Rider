import React from 'react';
import { View } from 'react-native';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import StatusShiftModal from '../../Components/StatusShiftModal';

const Home = () => {
  return (
    <KeyboardAvoidWrapper>
      <View style={GlobalStyles.container}>
        <StatusShiftModal />
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default Home;
