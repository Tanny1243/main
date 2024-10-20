import React, { useState } from "react";
import {
  Text,
  Image,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

export default Benefits = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const toggleExpanded2 = () => {
    setExpanded2(!expanded2);
  };
  const toggleExpanded3 = () => {
    setExpanded3(!expanded3);
  };
  const toggleExpanded4 = () => {
    setExpanded4(!expanded4);
  };
  const logoImg = require("./assets/icon.png");
  return (
    <ScrollView style={styles.maincontainer}>
      <View style={styles.start}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image
            source={logoImg}
            style={{ width: 50, height: 50, borderRadius: 30 }}
          />
          <View style={{ padding: 5 }}>
            <Text>NCFresh</Text>
            <Text>Benefits</Text>
          </View>
        </View>
      </View>

      <View style={[styles.container, expanded && styles.expanded]}>
        <TouchableOpacity onPress={toggleExpanded} style={styles.header}>
          <Text style={styles.title}>
            Why should you purchase from your local farmers market?
          </Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.content}>
            <Text>
              Purchasing from your local farmers market supports small-scale
              farmers and strengthens the local economy. It fosters a direct
              connection between consumers and producers, allowing for
              transparency and trust in where your food comes from.
              Additionally, buying locally reduces the environmental impact
              associated with long-distance transportation of goods.
              Furthermore, farmers markets often offer a wider variety of
              seasonal produce, promoting biodiversity and encouraging healthier
              eating habits.
            </Text>
          </View>
        )}
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleExpanded3} style={styles.header}>
          <Text style={styles.title}>
            Why eating fresh produce is good for you compared to processed food
          </Text>
        </TouchableOpacity>
        {expanded3 && (
          <View style={styles.content}>
            <Text>
              Fresh produce is rich in essential nutrients, offering better
              health benefits compared to processed foods. It's lower in
              unhealthy additives like sugars and unhealthy fats. Additionally,
              fresh produce tends to be more filling and can aid in weight
              management. Choosing fresh produce also supports local farmers and
              sustainable agriculture practices. Processed foods are often
              unhealthy due to several reasons. Firstly, they typically contain
              high levels of added sugars, salt, and unhealthy fats, which can
              contribute to various health issues such as obesity, diabetes, and
              cardiovascular diseases. The refining processes involved in making
              processed foods strip away essential nutrients, leaving behind
              empty calories that provide little nutritional value.
              Additionally, additives and preservatives used to enhance flavor,
              texture, and shelf life in processed foods have been linked to
              adverse health effects, including allergic reactions and digestive
              disorders. Consuming processed foods regularly may also lead to
              overconsumption, as they often lack the satiety provided by whole,
              unprocessed foods, increasing the risk of weight gain and related
              health problems. Furthermore, frequent consumption of processed
              foods has been associated with an increased risk of certain
              cancers, likely due to the presence of carcinogenic compounds
              formed during processing or cooking. Overall, limiting the intake
              of processed foods and focusing on whole, nutrient-dense options
              is crucial for maintaining optimal health and well-being.
            </Text>
          </View>
        )}
      </View>
      <View style={[styles.container, expanded && styles.expanded]}>
        <TouchableOpacity onPress={toggleExpanded2} style={styles.header}>
          <Text style={styles.title}>
            Vitamins in fresh produce and their benefits
          </Text>
        </TouchableOpacity>
        {expanded2 && (
          <View style={styles.content}>
            <Text>Vitamins in fresh produce and their benefits</Text>
            <Text>
              Vitamin C: Boosts immune system, promotes healthy skin and wound
              healing.
            </Text>
            <Text>
              Vitamin A: Supports vision health, immune function, and skin
              health
            </Text>
            <Text>Vitamin K: Aids in blood clotting and bone health.</Text>
            <Text>
              Vitamin E: Acts as an antioxidant, protecting cells from damage,
              and supports immune function.
            </Text>
            <Text>
              Vitamin B9 Folate: Important for cell division and growth,
              especially during pregnancy.
            </Text>
            <Text>
              Vitamin B6: Supports brain health, metabolism, and immune
              function.
            </Text>
            <Text>
              Vitamin B2 Riboflavin: Helps convert food into energy and supports
              growth and development.
            </Text>
          </View>
        )}
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleExpanded4} style={styles.header}>
          <Text style={styles.title}>
            How Does Fresh Produce Promote A Healthier Lifestyle
          </Text>
        </TouchableOpacity>
        {expanded4 && (
          <View style={styles.content}>
            <Text>
              {" "}
              Fresh produce promotes a healthier lifestyle through its abundant
              array of essential vitamins, minerals, and antioxidants, crucial
              for optimal bodily function. Incorporating fruits and vegetables
              into daily meals not only provides vital nutrients but also aids
              in weight management due to their low calorie and high fiber
              content. Moreover, consuming fresh produce supports cardiovascular
              health by reducing the risk of heart disease and stroke. Regular
              intake of these natural foods boosts immune function, thereby
              decreasing susceptibility to illnesses and infections.
              Additionally, fresh produce is rich in phytochemicals, which
              possess anti-inflammatory and anti-cancer properties, contributing
              to long-term health and disease prevention. Embracing a diet rich
              in fresh fruits and vegetables promotes hydration and supports
              overall hydration levels, crucial for bodily functions.
              Furthermore, the vibrant colors and flavors of fresh produce make
              healthy eating enjoyable, encouraging individuals to maintain
              nutritious dietary habits. Ultimately, by prioritizing fresh
              produce, individuals can enhance their quality of life, ensuring
              sustained vitality and well-being.
            </Text>
          </View>
        )}
      </View>
      <View>
        <Text>now always REMEMBER don't be cheesy be corny!!!</Text>
      </View>
      <View></View>
      <View style={{ height: 150 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "#9bdea1",
  },
  container: {
    backgroundColor: "#9bdea1",
  },
  boiog: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  boii: {
    marginBottom: 50,
    color: "white",
  },
  boii2: {
    marginTop: 30,
    color: "white",
  },
  Vitamin: {},
  Lifestyle: {},
  container: {
    backgroundColor: "#ffffff",
    marginVertical: 10,
    borderRadius: 40,
    overflow: "hidden",
  },
  header: {
    paddingVertical: 30,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "green",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    padding: 10,
  },
  expanded: {
    marginBottom: 100, // Add extra margin when expanded
    borderColor: "black",
    borderRadius: 40,
  },
  start: {
    flexDirection: "row",
    marginTop: 50,
  },
});