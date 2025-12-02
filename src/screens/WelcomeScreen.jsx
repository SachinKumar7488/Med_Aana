import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text,
    useColorScheme,
} from 'react-native';
import AppName from '../components/copy_Components/appName';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation();

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? '#000' : '#fff' },
            ]}
        >
            <View>
                <AppName isDarkMode={isDarkMode} />
            </View>

            <TouchableOpacity
                style={[
                    styles.googleButton,
                    { borderColor: isDarkMode ? '#444' : '#ccc' },
                ]}
                onPress={() => navigation.navigate("GoScreen")}
            >
                <Image
                    source={require('../assets/pngs/google.png')}
                    style={styles.googleIcon}
                />

                <Text style={[styles.googleText, { color: '#fff' }]}>
                    Continue with Google
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: '#4467E3',
        borderRadius: 8,
        elevation: 2,
        width: 463,
        height: 72,
    },
    googleIcon: {
        width: 28,
        height: 28,
        marginRight: 15,
    },
    googleText: {
        fontSize: 24,
        fontWeight: '400',
    },
});

export default WelcomeScreen;
