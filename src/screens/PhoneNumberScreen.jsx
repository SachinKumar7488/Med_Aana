import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    useColorScheme,
    Dimensions,
    TextInput,
    TouchableOpacity,
    FlatList,
    Modal,
    BackHandler,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StartBtn from '../components/copy_Components/startbtn';

const { width, height } = Dimensions.get('window');

const countryCodes = [
    { code: '+91', country: '🇮🇳 India' },
    { code: '+1', country: '🇺🇸 USA' },
    { code: '+44', country: '🇬🇧 UK' },
    { code: '+81', country: '🇯🇵 Japan' },
    { code: '+61', country: '🇦🇺 Australia' },
];

const PhoneNumberScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation();

    const [selectedCode, setSelectedCode] = useState('+91');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleSelect = (code) => {
        setSelectedCode(code);
        setModalVisible(false);
    };

    useEffect(() => {
        const backAction = () => {
            if (modalVisible) {
                setModalVisible(false);
                return true;
            }

            navigation.goBack();
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, [modalVisible]);

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
                    Phone number
                </Text>

                <Text
                    style={[
                        styles.helperText,
                        { color: isDarkMode ? '#aaa' : '#696868' },
                    ]}
                >
                    Please enter your phone number to verify your account.
                </Text>

                <View style={styles.inputContainer}>
                    <TouchableOpacity
                        style={styles.countryPicker}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.countryText}>{selectedCode}</Text>
                    </TouchableOpacity>

                    <TextInput
                        style={[
                            styles.phoneInput,
                            { color: isDarkMode ? '#fff' : '#000' },
                        ]}
                        placeholder="Enter phone number"
                        placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        maxLength={10}
                    />
                </View>
            </View>

            <StartBtn
                isDarkMode={isDarkMode}
                text="Get OTP"
                onPress={() => navigation.navigate('OtpScreen')}
            />

            <Modal
                visible={modalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <FlatList
                            data={countryCodes}
                            keyExtractor={(item) => item.code}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.countryItem}
                                    onPress={() => handleSelect(item.code)}
                                >
                                    <Text style={styles.countryLabel}>
                                        {item.country} {item.code}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
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
        justifyContent: 'center',
        marginTop: height * -0.34,
    },
    titleText: {
        fontSize: width * 0.07,
        fontWeight: '300',
        marginBottom: 10,
        paddingHorizontal: 30,
    },
    helperText: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 20,
        fontWeight: '300',
        paddingHorizontal: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        width: width * 0.8,
        marginTop: 30,
        backgroundColor: '#fff',
        marginLeft: 30,
    },
    countryPicker: {
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    countryText: {
        fontSize: 16,
        fontWeight: '500',
    },
    phoneInput: {
        flex: 1,
        fontSize: 16,
        padding: 10,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: width * 0.7,
        maxHeight: 300,
        padding: 10,
    },
    countryItem: {
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: '#ccc',
    },
    countryLabel: {
        fontSize: 16,
    },
});

export default PhoneNumberScreen;
