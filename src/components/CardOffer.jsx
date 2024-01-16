import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../theme/GlobalStyles";
import Carousel from "pinar";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Card, Avatar } from "@rneui/themed";
import Colors from "../theme/Colors";
import Images from "../theme/Images";

const { width } = Dimensions.get("window");

const images = [
  {
    id: 1,
    path: require("../assets/atomic-cover.jpg"),
  },
  {
    id: 2,
    path: require("../assets/atomic-back-cover.jpg"),
  },
];

export default function CardOffer() {
  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <Carousel style={styles.carousel} showsControls={false}>
          {images.map((image) => (
            <Image style={styles.image} source={image.path} key={image.id} />
          ))}
        </Carousel>
      </View>
      {/* Section images de l'article*/}
      {/* Section pour informations vendeur*/}
      <Card containerStyle={{ margin: 0, flex: 1, borderWidth: 2 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}></View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselContainer: {
    flex: 1,
  },
  carousel: {
    height: "100%",
    width: width,
  },
  image: {
    height: "100%",
    width: width,
    resizeMode: "contain",
  },
  itemContainer: {
    flex: 3,
    marginTop: 0,
    marginTop: 10,
    marginBottom: 10,
  },
  sellerContainer: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 40,
  },
});
