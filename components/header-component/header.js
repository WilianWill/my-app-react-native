import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const nomeUsuario = "Will";
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Ola, {nomeUsuario}</Text>
      <TouchableOpacity>
        <Ionicons name="person" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    height: 80,
    backgroundColor: "#820AD1",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 7,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    color: "#fff",
    fontSize: 30,
  },
});
