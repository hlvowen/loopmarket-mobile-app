import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";

import { Card, Avatar, Divider, Badge, Button, Icon } from "@rneui/themed";
import Colors from "../../theme/Colors";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const images = [
  {
    id: 1,
    path: require("../../assets/atomic-cover.jpg"),
  },
  {
    id: 2,
    path: require("../../assets/atomic-back-cover.jpg"),
  },
];

export default function ContentCard() {
  return (
    <Card containerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Avatar
            size={40}
            rounded
            source={{
              uri: "https://randomuser.me/api/portraits/men/36.jpg",
            }}
          />
        </View>
        <View style={{ marginLeft: 16 }}>
          <Text style={{ fontSize: 16 }}>Owen VO</Text>
        </View>
      </View>
      <View style={styles.imgAreaContainer}>
        <FlatList
          data={images}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={(img) => (
            <Image
              style={{
                width: 300,
                height: 300,
                resizeMode: "contain",
              }}
              source={require("../../assets/books/rio_front.jpg")}
            />
          )}
        />
      </View>
      <View style={styles.contentContainer}>
        <View>
          <Text style={{ fontSize: "22" }}>Atomic Habits</Text>
        </View>
        <View style={{ marginTop: 12 }}>
          <Text style={{ fontSize: 14 }}>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </Text>
        </View>
      </View>
      <Divider />
      <View style={styles.footerContainer}>
        <View>
          <View>
            <Text style={{ fontSize: 20, color: Colors.primaryVariant }}>
              10 €
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 13, color: Colors.primary }}>
              Parfait état
            </Text>
          </View>
        </View>
        <View>
          <Button
            buttonStyle={{
              borderRadius: 8,
              backgroundColor: Colors.primaryVariant,
            }}
            containerStyle={{
              width: "100%",
            }}
            titleStyle={{
              color: "white",
              fontWeight: "bold",
              marginHorizontal: 20,
            }}
          >
            <FontAwesome name="cart-plus" size={24} color="white" />
            Acheter
          </Button>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  imgAreaContainer: {
    marginBottom: 14,
  },
  contentContainer: {
    marginBottom: 14,
  },
  footerContainer: {
    flexDirection: "row",
    marginTop: 14,
    justifyContent: "space-around",
  },
  image: {
    height: "100%",
    width: width,
    resizeMode: "contain",
  },
  carousel: {
    width: width,
  },
});
