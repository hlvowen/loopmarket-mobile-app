import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { useEffect, useState, React } from "react";
import { Avatar, Badge, Button, Divider } from "@rneui/themed";
import Colors from "../theme/Colors";

import Carousel from "pinar";

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

export default function Post(props) {
  return (
    <View style={styles.container}>
      <View style={styles.sellerContainer}>
        <View>
          <Avatar
            size={40}
            rounded
            source={{
              uri: "https://randomuser.me/api/portraits/men/36.jpg",
            }}
          />
        </View>
        <View style={{ marginStart: 5 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Owen VO</Text>
        </View>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel style={styles.carousel} showsControls={false}>
          {images.map((image) => (
            <Image
              style={styles.image}
              source={{ uri: props.imgSource }}
              key={image.id}
            />
          ))}
        </Carousel>
      </View>
      <View style={styles.ctaContainer}>
        <View style={{ alignItems: "center" }}>
          <View>
            <Text style={{ color: Colors.primaryVariant, fontSize: 20 }}>
              {props.price} €
            </Text>
          </View>
          <View>
            <Badge
              value="Parfait état"
              badgeStyle={{ backgroundColor: Colors.primaryVariant }}
            />
          </View>
        </View>
        <View style={{ marginStart: 80, flex: 1 }}>
          <Button
            title="Acheter"
            buttonStyle={{
              backgroundColor: Colors.primaryVariant,
              borderRadius: 8,
            }}
            containerStyle={{
              width: "100%",
            }}
            titleStyle={{ color: "white", marginHorizontal: 20 }}
          />
        </View>
      </View>
      <View style={styles.postDetailsContainer}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {props.title}
          </Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text>{props.description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  sellerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 5,
  },
  carouselContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
  },
  carousel: {
    height: 240,
    width: width,
  },
  image: {
    height: "100%",
    width: width,
    resizeMode: "contain",
  },
  ctaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 5,
  },
  postDetailsContainer: {
    backgroundColor: "#fff",
    padding: 5,
    borderTopWidth: 1,
    borderColor: "grey",
  },
});
