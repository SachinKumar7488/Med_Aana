import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const AppName = ({ style, isDarkMode }) => (
  <View style={[styles.container, style]}>
    <Text style={[styles.baseText, { color: isDarkMode ? '#fff' : '#222' }]}>
      Med-Aana
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  baseText: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 48,
    letterSpacing: 2,
  },
});

export default AppName;
