import React, { useState, useRef, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    useColorScheme,
    Dimensions,
    BackHandler,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StartBtn from "../components/copy_Components/startbtn";
const { width, height } = Dimensions.get("window");

const OtpScreen = () => {
    const isDarkMode = useColorScheme() === "dark";
    const navigation = useNavigation();

    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(60);
    const inputs = useRef([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const backAction = () => {
            navigation.goBack();
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);

    const handleOTPChange = (text, index) => {
        if (/^\d$/.test(text)) {
            let newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);

            if (index < 3) {
                inputs.current[index + 1].focus();
            }
        } else if (text === "") {
            let newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);
        }
    };

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? '#000' : '#fff' },
            ]}
        >

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backArrow}
            >
                <Text style={{ fontSize: 60, color: isDarkMode ? "#fff" : "#696868" }}>
                    ←
                </Text>
            </TouchableOpacity>

            <Text style={[styles.titleText, { color: isDarkMode ? "#fff" : "#696868" }]}>
                OTP Verification
            </Text>

            <Text
                style={[
                    styles.helperText,
                    { color: isDarkMode ? "#aaa" : "#666" },
                ]}
            >
                A 4 digit OTP has been sent to +91-9876543210.{"\n"}
                You are one step away from creating your{" "}
                instant health-care profile.
            </Text>

            <View style={styles.otpContainer}>
                {otp.map((value, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (inputs.current[index] = ref)}
                        style={[
                            styles.otpInput,
                            {
                                backgroundColor: isDarkMode ? "#fff" : "#fff",
                                color: isDarkMode ? "#fff" : "#696868",
                            },
                        ]}
                        keyboardType="numeric"
                        maxLength={1}
                        value={value}
                        onChangeText={(text) => handleOTPChange(text, index)}
                    />
                ))}
            </View>

            <Text style={[styles.timerText, { color: isDarkMode ? "#fff" : "#696868" }]}>
                {timer > 0 ? `00:${timer < 10 ? "0" + timer : timer}` : "00:00"}
            </Text>

            <TouchableOpacity style={styles.resendContainer}>
                <Text style={[styles.resendText,
                {
                    color: isDarkMode ? "#fff" : "#696868",

                }]
                }>
                    Didn’t receive the code?{" "}
                    <Text style={styles.resendLink}>Resend OTP</Text>
                </Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <StartBtn
                    isDarkMode={isDarkMode}
                    text="Verify"
                    onPress={() => navigation.navigate("AllSetScreen")}
                />
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: height * 0.14,
    },
    backArrow: {
        width: width,
        paddingLeft: 20,
        marginBottom: 20,
    },
    titleText: {
        fontSize: width * 0.07,
        fontWeight: "400",
        textAlign: "left",
        marginTop: 20,
        width: width * 0.9,

    },
    helperText: {
        fontSize: 17,
        fontWeight: "400",
        marginTop: 10,
        lineHeight: 24,
        width: width * 0.9,
        textAlign: "left",
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width * 0.75,
        marginTop: 80,
    },
    otpInput: {
        width: 55,
        height: 55,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#ddd",
        fontSize: 24,
        textAlign: "center",
        elevation: 3,
        shadowColor: "#696868",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.75,
        shadowRadius: 9.84,
    },
    timerText: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: "500",
    },
    resendContainer: {
        width: width * 0.9,
        alignItems: "flex-end",
        marginTop: 20,
    },

    resendText: {
        fontSize: 16,
        color: "#666",
    },

    resendLink: {
        color: "#666",
        textDecorationLine: "none",
    },
    footer: {
        width: width,
        position:'absolute',
        bottom: 0,
        alignItems: "center",
    },

});

export default OtpScreen;
