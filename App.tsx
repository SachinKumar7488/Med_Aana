import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
