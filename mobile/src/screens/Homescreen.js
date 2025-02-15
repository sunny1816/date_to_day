import React, { useState } from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import CustomInput from "../components/Input";
import CustomButton from "../components/Button";

const HomeScreen = () => {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const colorScheme = useColorScheme();

  const formatDate = (text) => {
    let newText = text.replace(/[^0-9]/g, "");
    if (newText.length > 4) newText = newText.slice(0, 4) + "-" + newText.slice(4);
    if (newText.length > 7) newText = newText.slice(0, 7) + "-" + newText.slice(7);
    setDate(newText);
  };

  const fetchDay = async () => {
    try {
      const response = await fetch("http://192.168.176.112:5000/get-day", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date }),
      });
      const data = await response.json();
      setDay(data.day || "Invalid Date");
    } catch (error) {
      setDay("Network Error");
    }
  };

  return (
    <View style={[styles.container, colorScheme === "dark" ? styles.darkContainer : styles.lightContainer]}>
      <CustomInput value={date} onChangeText={formatDate} />
      <CustomButton title="Get Day" onPress={fetchDay} />
      <Text style={styles.result}>{day}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  lightContainer: { backgroundColor: "#f5f5f5" },
  darkContainer: { backgroundColor: "#121212" },
  result: { marginTop: 20, fontSize: 18, fontWeight: "bold" },
});

export default HomeScreen;
