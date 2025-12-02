import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    useColorScheme,
    Dimensions,
} from 'react-native';
import StartBtn from '../components/copy_Components/startbtn';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const GoScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation();

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? '#000' : '#fff' },
            ]}
        >
            <View style={styles.contentContainer}>
                <Text
                    style={[
                        styles.titleText,
                        { color: isDarkMode ? '#fff' : '#696868' },
                    ]}
                >
                    Let’s create your instant health-care profile
                </Text>
            </View>

            <StartBtn
                isDarkMode={isDarkMode}
                text="Go"
                onPress={() => navigation.navigate("PhoneNumberScreen")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
    },
    titleText: {
        position: 'absolute',
        left: width * -0.48,
        top: height * 0.24,
        fontSize: width * 0.1,
        fontWeight: '300',
        textAlign: 'left',
    },
});

export default GoScreen;
