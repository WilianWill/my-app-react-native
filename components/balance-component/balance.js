import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Balance() {
  const [saldo, setSaldo] = useState(1000);
  const [despesas, setDespesas] = useState(386);

  const saldoStyle = {
    color: saldo > 0 ? "green" : "red",
  };

  const saldoTotal = `R$ ${saldo.toFixed(2)}`;
  const despesaTotal = `R$ - ${despesas.toFixed(2)}`;

  return (
    <View style={style.balanceContainer}>
      <View style={style.balanceContentDisponivel}>
        <Text style={style.balanceTitle}>Saldo Disponível</Text>
        <Text style={[style.balanceSaldo, saldoStyle]}>{saldoTotal}</Text>
      </View>

      <View style={style.balanceContentDespesas}>
        <Text style={style.balanceTitle}>Gastos</Text>
        <Text style={style.balanceGastos}>{despesaTotal}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  balanceContainer: {
    backgroundColor: "#fff",
    marginTop: -5,
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginInline: 10,
    paddingInline: 14,
    shadowColor: "#000",
    elevation: 2,
  },

  balanceContentDisponivel: {
    alignItems: "flex-start",
  },
  balanceContentDespesas: {
    alignItems: "flex-end",
  },

  balanceTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "gray",
  },

  balanceGastos: {
    fontSize: 20,
    color: "red",
  },
  balanceSaldo: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
