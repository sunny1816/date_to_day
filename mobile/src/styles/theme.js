import { useColorScheme } from "react-native";

export const useTheme = () => {
  const colorScheme = useColorScheme();

  return colorScheme === "dark" ? darkTheme : lightTheme;
};

export const lightTheme = {
  background: "#f5f5f5",
  text: "#000",
  inputBorder: "#000",
  buttonBackground: "#007BFF",
  buttonText: "#fff",
  placeholder: "#555",
};

export const darkTheme = {
  background: "#121212",
  text: "#fff",
  inputBorder: "#fff",
  buttonBackground: "#1E90FF",
  buttonText: "#fff",
  placeholder: "#bbb",
};
