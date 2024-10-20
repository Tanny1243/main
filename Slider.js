import { View, Text, FlatList, Image } from "react-native";
import React from "react";

export default function Slider({ sliderList }) {
  return (
    <View style={{ marginTop: 5 }}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View>
            <Image
              source={{ uri: item?.image }}
              style={{ height: 160, weight: 330 }}
            />
          </View>
        )}
      />
    </View>
  );
}