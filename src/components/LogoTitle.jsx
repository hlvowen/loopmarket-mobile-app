import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Images from "../theme/Images";

export default function LogoTitle() {
  return (
    <Image style={{ width: 200, height: 200 }} source={Images.loopMarketLogo} />
  );
}

const styles = StyleSheet.create({});
