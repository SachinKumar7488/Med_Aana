import { TouchableOpacity, Image, StyleSheet } from "react-native";

const CartIcon = ({ onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.cartButton, style]} onPress={onPress}>
            <Image
                source={require("../../assets/pngs/carticon.png")}
                style={styles.cartIcon}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cartButton: {
        position: "absolute",
        bottom: 300,
        right: 25,
        width: 80,
        height: 80,
        backgroundColor: "#4467E3",
        borderRadius: '100%',
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },

    cartIcon: {
        width: 48,
        height: 48,
        tintColor: "#fff",
    },
});

export default CartIcon;
