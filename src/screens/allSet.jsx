import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AllSetScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("ProductLanding");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    const handlePress = () => {
        navigation.replace("ProductLanding");
    };

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={handlePress}
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? '#000' : '#fff' },
            ]}
        >
            <Text style={[styles.googleText, { color: isDarkMode ? '#fff' : '#000' }]}>
                Your profile is all set and ready to go
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    googleText: {
        fontSize: 24,
        fontWeight: '400',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});

export default AllSetScreen;
