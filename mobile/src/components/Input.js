import React from "react";
import { TextInput, StyleSheet, useColorScheme } from "react-native";

const CustomInput = ({ value, onChangeText, onKeyPress }) => {
  const colorScheme = useColorScheme();

  return (
    <TextInput
      style={[styles.input, colorScheme === "dark" ? styles.darkInput : styles.lightInput]}
      placeholder="YYYY-MM-DD"
      placeholderTextColor={colorScheme === "dark" ? "#bbb" : "#555"}
      value={value}
      onChangeText={onChangeText}
      onKeyPress={onKeyPress}
      keyboardType="numeric"
      returnKeyType="done"
      blurOnSubmit={false}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    width: 200,
    marginBottom: 10,
    textAlign: "center",
    padding: 8,
    fontSize: 16,
    borderRadius: 5,
  },
  lightInput: { borderColor: "#000", color: "#000" },
  darkInput: { borderColor: "#fff", color: "#fff" },
});

export default CustomInput;
