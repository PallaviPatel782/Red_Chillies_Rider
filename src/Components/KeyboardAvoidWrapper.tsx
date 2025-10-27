import React, { ReactNode } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../utils/Colors/Colors';

type Props = {
  children: ReactNode;
  scrollEnabled?: boolean;
  contentStyle?: object;
  bottomComponent?: ReactNode; 
};

const KeyboardAvoidWrapper: React.FC<Props> = ({
  children,
  scrollEnabled = true,
  contentStyle = {},
  bottomComponent,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView
            scrollEnabled={scrollEnabled}
            contentContainerStyle={[
              styles.scrollContent,
              contentStyle,
              { paddingBottom: bottomComponent ? 0 : insets.bottom },
            ]}
            keyboardShouldPersistTaps="handled"
          >
            {children}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      {bottomComponent && (
        <View style={[styles.bottomContainer, { paddingBottom: insets.bottom }]}>
          {bottomComponent}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.white },
  scrollContent: { flexGrow: 1, backgroundColor: Colors.white },
  bottomContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
});

export default KeyboardAvoidWrapper;
