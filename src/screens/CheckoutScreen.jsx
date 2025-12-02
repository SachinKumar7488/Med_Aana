import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput
} from "react-native";

const { width } = Dimensions.get("window");

const CheckoutScreen = () => {
  const [selectedColor, setSelectedColor] = useState("#E45D5C");

  const [step, setStep] = useState(1);
  const [selectedFor, setSelectedFor] = useState("self");

  const getStepCircleStyle = (index) => {
    if (index < step) {
      return { backgroundColor: "#3F82F7" }; // completed
    }
    if (index === step) {
      return { backgroundColor: "#3F82F7" }; // active
    }
    return { backgroundColor: "#555" }; // upcoming
  };


  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
      >
        {/* SELECTED COLOR ROW */}
        <View style={styles.colorRow}>
          <Text style={styles.colorLabel}>Selected color</Text>

          <TouchableOpacity style={styles.colorPicker}>
            <View style={[styles.colorDot, { backgroundColor: selectedColor }]} />
            <Text style={styles.arrow}>⌄</Text>
          </TouchableOpacity>
        </View>

        {/* STEPPER */}
        <View style={styles.stepperContainer}>

          {/* ---------------- STEP 1 ---------------- */}
          <View style={styles.stepRow}>
            <View style={styles.leftColumn}>
              <View style={[styles.stepCircle, getStepCircleStyle(1)]}>
                <Text style={styles.stepNumber}>1</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>

            <View style={styles.rightColumn}>
              <Text style={styles.stepTitle}>Who are you buying it for</Text>

              {step === 1 && (
                <View style={styles.card}>
                  <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => setSelectedFor("self")}
                  >
                    <View style={styles.radioOuter}>
                      {selectedFor === "self" && <View style={styles.radioInner} />}
                    </View>
                    <Text style={styles.radioText}>For Myself</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => setSelectedFor("family")}
                  >
                    <View style={styles.radioOuter}>
                      {selectedFor === "family" && <View style={styles.radioInner} />}
                    </View>
                    <Text style={styles.radioText}>For My Family</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() => setStep(2)}
                  >
                    <Text style={styles.continueText}>Continue</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>

          {/* ---------------- STEP 2 ---------------- */}
          <View style={styles.stepRow}>
            <View style={styles.leftColumn}>
              <View style={[styles.stepCircle, getStepCircleStyle()]}>
                <Text style={styles.stepNumber}>2</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>

            <View style={styles.rightColumn}>
              <Text style={styles.stepTitle}>Basic information</Text>

              {step === 2 && (
                <View style={styles.card}>
                  <TextInput
                    placeholder="For example: mayank"
                    style={styles.input}
                  />

                  <Text style={{ color: "green", marginTop: 4 }}>Available</Text>

                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <TouchableOpacity
                      style={styles.continueBtn}
                      onPress={() => setStep(3)}
                    >
                      <Text style={styles.continueText}>Continue</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.backBtn}
                      onPress={() => setStep(1)}
                    >
                      <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </View>

          <View style={styles.rightColumn}>
            <Text style={styles.stepTitle}>Create a unique user handle.</Text>

            {step === 3 && (
              <View style={styles.card}>
                <TextInput
                  placeholder="For example: mayank"
                  style={styles.input}
                />

                <Text style={{ color: "green", marginTop: 4 }}>Available</Text>

                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() => setStep(4)}
                  >
                    <Text style={styles.continueText}>Continue</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => setStep(2)}
                  >
                    <Text style={styles.backText}>Back</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>

        {/* ---------------- STEP 3 ---------------- */}
        <View style={styles.stepRow}>
          <View style={styles.leftColumn}>
            <View style={[styles.stepCircle, getStepCircleStyle(3)]}>
              <Text style={styles.stepNumber}>3</Text>
            </View>
            <View style={styles.verticalLine} />
          </View>

          <View style={styles.rightColumn}>
            <Text style={styles.stepTitle}>What is your blood-type?</Text>

            {step === 4 && (
              <View style={styles.card}>
                <Text>Your blood type is needed for emergencies.</Text>

                <TouchableOpacity
                  style={styles.continueBtn}
                  onPress={() => setStep(5)}
                >
                  <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.backBtn}
                  onPress={() => setStep(3)}
                >
                  <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        {/* ---------------- STEP 4 ---------------- */}
        <View style={styles.stepRow}>
          <View style={styles.leftColumn}>
            <View style={[styles.stepCircle, getStepCircleStyle(4)]}>
              <Text style={styles.stepNumber}>4</Text>
            </View>
            <View style={styles.verticalLine} />
          </View>

          <View style={styles.rightColumn}>
            <Text style={styles.stepTitle}>Have you opted for a health-insurance?</Text>

            {step === 5 && (
              <View style={styles.card}>
                <TouchableOpacity
                  style={styles.continueBtn}
                  onPress={() => setStep(6)}
                >
                  <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.backBtn}
                  onPress={() => setStep(4)}
                >
                  <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        {/* ---------------- STEP 5 ---------------- */}
        <View style={styles.stepRow}>
          <View style={styles.leftColumn}>
            <View style={[styles.stepCircle, getStepCircleStyle(6)]}>
              <Text style={styles.stepNumber}>6</Text>
            </View>
          </View>

          <View style={styles.rightColumn}>
            <Text style={styles.stepTitle}>Do you have any metal implants?</Text>

            {step === 6 && (
              <View style={styles.card}>
                <TouchableOpacity
                  style={styles.continueBtn}
                  onPress={() => setStep(7)}
                >
                  <Text style={styles.continueText}>Finish</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.backBtn}
                  onPress={() => setStep(5)}
                >
                  <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        {/* ---------------- STEP 6 ---------------- */}
        {step === 6 && (
          <View style={styles.stepRow}>
            <View style={styles.leftColumn}>
              <View style={[styles.stepCircle, getStepCircleStyle(7)]}>
                <Text style={styles.stepNumber}>7</Text>
              </View>
            </View>

            <View style={styles.rightColumn}>
              <Text style={styles.stepTitle}>All Set!</Text>
            </View>
          </View>
        )}

      </ScrollView >
    </View >
  );
};

export default CheckoutScreen;

/* -------------------------------- STYLES ------------------------------- */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },

  /* COLOR ROW */
  colorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  colorLabel: { fontSize: 16, fontWeight: "400", marginRight: 15 },
  colorPicker: { flexDirection: "row", alignItems: "center" },
  colorDot: { width: 18, height: 18, borderRadius: 9, marginRight: 8 },
  arrow: { fontSize: 20, color: "#666" },

  /* STEPPER */
  stepperContainer: { marginTop: 10 },

  stepRow: { flexDirection: "row", marginBottom: 25 },

  leftColumn: { alignItems: "center", width: 40 },

  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#555",
    justifyContent: "center",
    alignItems: "center",
  },
  stepActive: { backgroundColor: "#3F82F7" },
  stepNumber: { color: "#fff", fontSize: 14 },

  verticalLine: {
    width: 1,
    height: 55,
    backgroundColor: "#ccc",
    marginTop: 5,
  },

  rightColumn: { width: width - 80 },

  stepTitle: { fontSize: 17, color: "#333", marginBottom: 10 },

  card: {
    marginLeft: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 12,
  },

  radioOption: { flexDirection: "row", alignItems: "center", marginBottom: 10 },

  radioOuter: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#3F82F7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#3F82F7",
  },

  radioText: { fontSize: 16, color: "#444" },

  continueBtn: {
    backgroundColor: "#3F82F7",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  continueText: { color: "#fff", fontSize: 15 },

  backBtn: { paddingHorizontal: 14, paddingVertical: 6, marginLeft: 10 },
  backText: { color: "#444", fontSize: 15 },

  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 5,
  },
});
