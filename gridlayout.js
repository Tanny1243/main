import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

const GridExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <View style={styles.item}>
          <Text style={[styles.text, styles.textBottomCenter]}>Tomatoes</Text>
          <Text style={[styles.price, styles.textBottomCenter2]}>$1.00</Text>
        </View>
        <View style={styles.item}>
          <Text style={[styles.text, styles.textBottomCenter]}>Carrots</Text>
          <Text style={[styles.price, styles.textBottomCenter2]}>$1.00</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={styles.item}>
          <Text style={[styles.text, styles.textBottomCenter]}>Onions</Text>
          <Text style={[styles.price, styles.textBottomCenter2]}>$1.00</Text>
        </View>
        <View style={styles.item}>
          <Text style={[styles.text, styles.textBottomCenter]}>Cabbage</Text>
          <Text style={[styles.price, styles.textBottomCenter2]}>$1.00</Text>
        </View>
      </View>
      <View style={styles.row3}>
        <View style={styles.item}>
          <Text style={[styles.text, styles.textBottomCenter]}>Corn</Text>
          <Text style={[styles.price, styles.textBottomCenter2]}>$1.00</Text>
        </View>
        <View style={styles.item}>
          <Text style={[styles.text, styles.textBottomCenter]}>Watermelon</Text>
          <Text style={[styles.price, styles.textBottomCenter2]}>$1.00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  row1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 400,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 170,
    margin: 10,
  },
  row3: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 170,
    margin: 10,
  },

  item: {
    width: 100,
    height: 150,
    borderRadius: 30,
    backgroundColor: "white",
    textShadowColor: "black",
    marginTop: 50,
    margin: 10,
    alignItems: "center",
    flex: 1,
    color: "white",
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    position: "absolute", // Required for positioning the text
  },
  price: {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
    position: "absolute",
  },
  textBottomCenter: {
    bottom: 20,
    left: "38%",
    transform: [{ translateX: -25 }], // Centering the text horizontally
  },
  textBottomCenter2: {
    bottom: 10,
    left: "58%",
    transform: [{ translateX: -25 }], // Centering the text horizontally
    alignItems: "center",
  },
});

export default GridExample;