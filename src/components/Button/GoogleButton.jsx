import React from 'react';
import { TouchableOpacity, Text, StyleSheet, useWindowDimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export default function GoogleButton({ onPress }) {
    const { width } = useWindowDimensions();
    const btnWidth = Math.min(600, Math.round(width * 0.9));


    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={[styles.container, { width: btnWidth }]}>
            <Text style={styles.text}>Continue with Google</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: { fontFamily: fonts.comfortaaRegular, color: '#fff', fontSize: 18 },
});