import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Carousel from "pinar";
import { Button } from "@rneui/themed";
import Colors from "../../theme/Colors";

export default function UploadItemImage() {
  return (
    <View style={styles.container}>
      <Carousel>
        <View>
          <Button
            title="Acheter"
            buttonStyle={{
              backgroundColor: Colors.primaryVariant,
              borderRadius: 8,
            }}
            titleStyle={{ color: "white", marginHorizontal: 20 }}
          />
        </View>
      </Carousel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
  },
});
