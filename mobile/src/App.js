import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, useColorScheme, TouchableOpacity, Image, Platform } from "react-native";

// Automatically detect the correct backend URL
const getBackendURL = () => {
  const LOCAL_IP = "192.168.176.112"; // Replace with your actual local network IP
  if (Platform.OS === "android") {
    return `http://${LOCAL_IP}:5000`; // Android Emulator or Real Device
  }
  return "http://localhost:5000"; // iOS / Web Localhost
};

const BACKEND_URL = getBackendURL();

const App = () => {
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
      console.log(`Fetching from: ${BACKEND_URL}/get-day`);
      const response = await fetch(`${BACKEND_URL}/get-day`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date }),
      });
      const data = await response.json();
      console.log("Response received:", data);
      setDay(data.day || "Invalid Date");
    } catch (error) {
      console.error("Error fetching day:", error);
      setDay("Network Error: Check your connection");
    }
  };

  return (
    <View style={[styles.container, colorScheme === "dark" ? styles.darkContainer : styles.lightContainer]}>
      <Image 
        source={require("../assets/calendar-249.png")} 
        style={[styles.logo, colorScheme === "dark" ? styles.darkLogo : null]} 
      />
      
      <TextInput
        style={[styles.input, colorScheme === "dark" ? styles.darkInput : styles.lightInput]}
        placeholder="YYYY-MM-DD"
        placeholderTextColor={colorScheme === "dark" ? "#bbb" : "#555"}
        value={date}
        onChangeText={formatDate}
        keyboardType="numeric"
        onSubmitEditing={fetchDay} 
        returnKeyType="done"
        blurOnSubmit={false} 
      />
      <TouchableOpacity style={styles.button} onPress={fetchDay} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Get Day</Text>
      </TouchableOpacity>
      <Text style={[styles.result, colorScheme === "dark" ? styles.darkText : styles.lightText]}>{day}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  lightContainer: { backgroundColor: "#f5f5f5" },
  darkContainer: { backgroundColor: "#121212" },
  logo: { width: 120, height: 120, marginBottom: 20, resizeMode: "contain" },
  darkLogo: { tintColor: "#fff" }, 
  input: { 
    borderBottomWidth: 2, 
    width: 220, 
    marginBottom: 10, 
    textAlign: "center", 
    padding: 10, 
    fontSize: 18, 
    borderRadius: 8,
  },
  lightInput: { borderColor: "#000", color: "#000" },
  darkInput: { borderColor: "#fff", color: "#fff" },
  button: { 
    backgroundColor: "#007BFF", 
    padding: 12, 
    borderRadius: 8, 
    marginTop: 10, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  result: { marginTop: 20, fontSize: 20, fontWeight: "bold" },
  darkText: { color: "#fff" },
  lightText: { color: "#000" },
});

export default App;
