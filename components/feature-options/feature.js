import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Feature() {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.item}>
        <TouchableOpacity>
          <Ionicons name="card" style={styles.icon} />
          <Text style={styles.title}>Cartão</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity>
          <MaterialIcons name="attach-money" style={styles.icon} />
          <Text style={styles.title}>Depositar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity>
          <MaterialIcons name="transfer-within-a-station" style={styles.icon} />
          <Text style={styles.title}>Transferir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.item}>
        <TouchableOpacity>
          <MaterialIcons name="settings" style={styles.icon} />
          <Text style={styles.title}>Config</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginInline: 10,
    marginBlock: 10,
  },
  item: {
    backgroundColor: "#fff",
    marginInline: 10,
    marginBlock: 10,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#000",
    fontSize: 30,
    marginBottom: 5,
    marginRight: 5,
  },
  title: {
    color: "gray",
    fontSize: 20,
    fontWeight: "bold",
  },
});
