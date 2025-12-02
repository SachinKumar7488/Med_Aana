import { useEffect, useState } from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import AppName from '../components/copy_Components/appName';
import WelcomeScreen from './WelcomeScreen';

const StartScreen = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#000' : '#fff' },
      ]}
    >
      {showWelcome ? (
        <WelcomeScreen />
      ) : (
        <AppName isDarkMode={isDarkMode} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StartScreen;
