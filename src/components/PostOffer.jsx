import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { Card, Button } from "@rneui/base";

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

export default function PostOffer() {
  return (
    <View style={styles.container}>
      <View style={styles.posterContainer}>
        <Text>Owen</Text>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel style={styles.carousel} showsControls={false}>
          {images.map((image) => (
            <Image style={styles.image} source={image.path} key={image.id} />
          ))}
        </Carousel>
      </View>
      <View style={styles.ctaContainer}>
        <View>
          <Text>prix</Text>
        </View>
        <View style={{}}>
          <Button
            title="Acheter"
            buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ color: "white", marginHorizontal: 20 }}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View>
          <Text>Atomic Habit</Text>
        </View>
        <View>
          <Text>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  posterContainer: {
    borderColor: "purple",
    borderWidth: 2,
  },
  carouselContainer: {
    flex: 1,
    borderColor: "yellow",
    borderWidth: 2,
  },
  itemContainer: {
    flex: 1,
    borderColor: "yellow",
    borderWidth: 2,
  },
  carousel: {
    height: "100%",
    width: width,
    alignItems: "stretch",
  },
  image: {
    height: "100%",
    width: width,
    resizeMode: "contain",
  },
  ctaContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
    borderColor: "green",
    borderWidth: 2,
    padding: 0,
  },
});
