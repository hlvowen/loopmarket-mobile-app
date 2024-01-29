import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState, React } from "react";
import { GlobalStyles } from "../theme/GlobalStyles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogoTitle from "../components/LogoTitle";
import Post from "../components/Post";
import Colors from "../theme/Colors";
import ContentCard from "../components/feed/ContentCard";

export default function Home() {
  const Tab = createBottomTabNavigator();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => response.json())
      .then((json) => {
        setProduct([...product, ...json]);
        console.log("product", product);
      });
  }, []);

  return (
    <View style={styles.container}>
      {/* <ScrollView style={{ padding: 0 }}>
        {product.map((p, index) => (
          <Post
            title={p.title}
            description={p.description}
            imgSource={p.image}
            price={p.price}
            key={index}
          ></Post>
        ))}
      </ScrollView> */}
      <ContentCard></ContentCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
