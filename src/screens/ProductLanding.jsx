import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import CartIcon from "../components/copy_Components/cartIcon";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const ProductLanding = () => {
    const navigation = useNavigation();
    const [showDescription, setShowDescription] = useState(true);
    const [selectedColor, setSelectedColor] = useState("#d9d9d9");
    const colors = ["#DCDCDD", "#E45D5C", "#EFA73E", "#4F5C67", "#3F829E"];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>

                {/* IMAGE BOX */}
                <View style={[styles.imageBox, { backgroundColor: selectedColor }]} />

                {/* COLOR SELECTOR */}
                <View style={styles.colorsRow}>
                    {colors.map((c, i) => (
                        <TouchableOpacity
                            key={i}
                            onPress={() => setSelectedColor(c)}
                            style={[
                                styles.colorDot,
                                { backgroundColor: c },
                                selectedColor === c && styles.selectedDot
                            ]}
                        />
                    ))}
                </View>

                {/* DESCRIPTION SECTION */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Product Description</Text>

                    <TouchableOpacity
                        onPress={() => setShowDescription(!showDescription)}
                        style={styles.dropdownToggle}
                    >
                        <Text style={styles.descText}>
                            Amigo is designed to manage your healthcare data smartly
                        </Text>
                        <Text style={styles.dropdownIcon}>
                            {showDescription ? "▲" : "▼"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Product Specification</Text>

                    <View style={styles.fullGrid}>
                        <View style={[styles.gridItem, styles.borderRight, styles.borderBottom]}>
                            <View style={styles.iconBox}>
                                <Text style={styles.iconText}>Si{"\n"}Silicon</Text>
                            </View>
                            <Text style={styles.specLabel}>Material</Text>
                        </View>

                        <View style={[styles.gridItem, styles.borderBottom]}>
                            <View style={styles.iconBox}>
                                <Text style={styles.iconText}>2mm{"\n"}Thickness</Text>
                            </View>
                        </View>

                        <View style={[styles.gridItem, styles.borderRight]}>
                            <View style={styles.iconCircle}>
                                <Text style={styles.smallIconText}>1.5 yrs{"\n"}on wrist</Text>
                            </View>
                        </View>

                        <View style={styles.gridItem}>
                            <View style={styles.iconBoxLarge}>
                                <Text style={styles.smallIconText}>
                                    Data contained:{"\n"}
                                    Blood Group,{"\n"}
                                    Metal Implant, QR
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <CartIcon onPress={() => navigation.navigate("CheckoutScreen")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },

    imageBox: {
        width,
        height: height * 0.32,
        backgroundColor: "#d9d9d9",
        marginBottom: 20,
    },

    /* Color Selector */
    colorsRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
    colorDot: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginHorizontal: 8,
    },
    selectedDot: {
        borderWidth: 2,
        borderColor: "transparent",
    },

    /* Sections */
    section: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10,
    },

    dropdownToggle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    descText: {
        width: width * 0.7,
        fontSize: 20,
        color: "#000",
    },
    dropdownIcon: { fontSize: 18, color: "#000" },

    fullGrid: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        borderColor: "#ccc",
    },

    gridItem: {
        width: "50%",
        height: 130,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff",
    },

    borderRight: {
        borderRightWidth: 1,
        borderColor: "#000000",
    },

    borderBottom: {
        borderBottomWidth: 1,
        borderColor: "#000000",
    },

    /* ICON BOXES */
    iconBox: {
        width: 80,
        height: 80,
        borderRadius: 6,
        backgroundColor: "#f4f4f4",
        justifyContent: "center",
        alignItems: "center",
    },

    iconBoxLarge: {
        width: 120,
        height: 80,
        borderRadius: 6,
        backgroundColor: "#f4f4f4",
        justifyContent: "center",
        alignItems: "center",
    },

    iconCircle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: "#50A4DD",
        justifyContent: "center",
        alignItems: "center",
    },

    iconText: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "700",
        color: "#333",
    },

    smallIconText: {
        textAlign: "center",
        fontSize: 11,
        color: "#444",
    },

    specLabel: {
        marginTop: 8,
        fontSize: 13,
        color: "#444",
    },
});

export default ProductLanding;
