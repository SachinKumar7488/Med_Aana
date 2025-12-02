import React from 'react';
import { View, TextInput, StyleSheet, useWindowDimensions } from 'react-native';
import fonts from '../../styles/fonts';


export default function OTPInput() {
    const refs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];
    const { width } = useWindowDimensions();
    const boxSize = Math.min(68, Math.round(width * 0.12));


    return (
        <View style={styles.row}>
            {refs.map((r, i) => (
                <TextInput
                    key={i}
                    ref={r}
                    maxLength={1}
                    keyboardType="number-pad"
                    style={[styles.box, { width: boxSize, height: boxSize, borderRadius: Math.round(boxSize / 2) }]}
                />
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 20, paddingHorizontal: 40 },
    box: { borderWidth: 1, borderColor: '#E6E6E6', textAlign: 'center', fontSize: 20, fontFamily: fonts.comfortaaRegular },
});