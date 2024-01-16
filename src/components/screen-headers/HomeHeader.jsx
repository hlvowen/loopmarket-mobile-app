import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../theme/GlobalStyles";

export default function HomeHeader() {
  return (
    <View style={Styles.container}>
      <View style={Styles.row}>
        <Text>HomeHeader fef wfwfwfw</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 130,
  },
  row: {
    flexDirection: "row",
  },
});
