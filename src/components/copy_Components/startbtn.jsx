import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');

const StartBtn = ({ style, isDarkMode, text ,onPress}) => (
    <View>
        <TouchableOpacity
            style={[
                styles.goButton,
                { backgroundColor: '#4467E3' },
            ]}
            onPress={onPress}
        >
            <Text style={styles.goText}>{text}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    baseText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 48,
        letterSpacing: 2,
    },
    goButton: {
        position: 'absolute',
        right: width * -0.5,
        bottom: height * 0.2,
        width: width * 0.35,
        height: height * 0.07,
        borderTopLeftRadius: width * 0.07,
        borderBottomLeftRadius: width * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    goText: {
        color: '#fff',
        fontSize: width * 0.07,
        fontWeight: '500',
    },
});

export default StartBtn;
