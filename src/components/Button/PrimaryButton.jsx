import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, useWindowDimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export default function PrimaryButton({ title = 'Button', onPress, style }) {
    const { width } = useWindowDimensions();
    const buttonWidth = Math.min(600, Math.round(width * 0.9));


    return (
        <View style={[styles.wrapper, style]}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={[styles.button, { width: buttonWidth }]}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    wrapper: { alignItems: 'center' },
    button: {
        height: 60,
        borderRadius: 10,
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: { fontFamily: fonts.comfortaaBold, fontSize: 18, color: '#fff' },
});