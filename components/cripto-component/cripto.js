import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Cripto() {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name="logo-bitcoin" style={styles.icon} />
      <Text style={styles.text}>Criptomoedas</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 7,
    marginInline: 10,
    borderRadius: 10,
    shadowColor: "#000",
    elevation: 2,
  },

  text: {
    color: "gray",
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    color: "#000",
    fontSize: 30,
  },
});
