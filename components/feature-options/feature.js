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
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={styles.item}>
            <MaterialIcons name="credit-card" style={styles.icon} />
            <Text style={styles.title}>Cartão</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <MaterialIcons name="attach-money" style={styles.icon} />
            <Text style={styles.title}>Despesas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <MaterialIcons name="settings" style={styles.icon} />
            <Text style={styles.title}>Config</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <MaterialIcons name="settings" style={styles.icon} />
            <Text style={styles.title}>Teste</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <MaterialIcons name="settings" style={styles.icon} />
            <Text style={styles.title}>Teste</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginInline: 10,
    marginBlock: 10,
    borderRadius: 5,
  },
  item: {
    backgroundColor: "#fff",
    marginInline: 10,
    marginBlock: 10,
    minHeight: 60,
    width: 90,
    padding: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#000",
    fontSize: 30,
    marginBottom: 5,
    marginRight: 5,
  },
  title: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
  },
});
