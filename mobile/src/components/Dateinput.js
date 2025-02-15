import React from "react";
import { TextInput, StyleSheet } from "react-native";

const DateInput = ({ onChange }) => (
  <TextInput 
    style={styles.input} 
    placeholder="YYYY-MM-DD" 
    onChangeText={onChange} 
  />
);

const styles = StyleSheet.create({
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 5 }
});

export default DateInput;
