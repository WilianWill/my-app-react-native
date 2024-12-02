import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header-component/header";
import Balance from "./components/balance-component/balance";
import Feature from "./components/feature-options/feature";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Balance />
      <Feature />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
});
