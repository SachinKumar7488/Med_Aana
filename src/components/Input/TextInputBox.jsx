import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';


export default function TextInputBox({ placeholder, value, onChangeText, style }) {
    return (
        <View style={[styles.container, style]}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#999"
                style={styles.input}
                keyboardType="phone-pad"
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 8,
        padding: 12,
    },
    input: { fontFamily: fonts.comfortaaRegular, fontSize: 16 },
});