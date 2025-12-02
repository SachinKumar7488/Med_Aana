import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import GoScreen from '../screens/go';
import PhoneNumberScreen from '../screens/PhoneNumberScreen';
import OtpScreen from '../screens/OTPScreen';
import AllSetScreen from '../screens/allSet';
import ProductLanding from '../screens/ProductLanding';
import NextPage from '../screens/NextPage';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: '600',
        },
        headerTitleAlign: 'left',  
      }}
    >

      <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GoScreen" component={GoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AllSetScreen" component={AllSetScreen} options={{ headerShown: false }} />

      <Stack.Screen
        name="ProductLanding"
        component={ProductLanding}
        options={{
          title: 'Amigo',
          headerBackVisible: false,
        }}
      />

      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{
          title: 'Checkout',
          headerBackVisible: false,
        }}
      />

    </Stack.Navigator>
  );
}

export default Navigation;
