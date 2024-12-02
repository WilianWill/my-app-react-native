import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header-component/header";
import Balance from "./components/balance-component/balance";
import Feature from "./components/feature-options/feature";
import Cripto from "./components/cripto-component/cripto";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Balance />
      <Feature />
      <Cripto />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
});
