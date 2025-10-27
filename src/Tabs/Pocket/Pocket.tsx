import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pocket = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pocket</Text>
    </View>
  )
}

export default Pocket

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Ubuntu-Medium',
    color: '#000',
  },
})
