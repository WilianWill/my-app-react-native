import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Cripto() {
  return (
    <View style={styles.container}>
      <Ionicons name="logo-bitcoin" style={styles.icon} />
      <Text style={styles.text}>Criptomoedas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 7,
  },
});
