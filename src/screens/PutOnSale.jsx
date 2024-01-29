import { View, Text, StyleSheet } from "react-native";
import React from "react";
import UploadItemImage from "../components/put-on-sale/UploadItemImage";

export default function PutOnSale() {
  return (
    <View style={styles.container}>
      <UploadItemImage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
