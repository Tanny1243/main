import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Button,
  Animated,
} from "react-native";
import Slider from "./Slider";

export default FarmerHomepage = ({ route }) => {
  const [expanded, setExpanded] = useState(false);
  const { username, email } = route.params.userData;
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const logoImg = require("./assets/icon.png");
  return (
    <View style={{ backgroundColor: "#ADD8E6", height: "100%" }}>
      <View style={{ backgroundColor: "#ADD8E6" }}>
        <View style={styles.start}>
          <Image
            source={logoImg}
            style={{ width: 50, height: 50, borderRadius: 30 }}
          />
          <Text style={{ padding: 5 }}>
            FoodForAll
            {
              "                                                                             "
            }
            <Text style={{ color: "#006400", fontWeight: "bold" }}>
              Farmer HomePage
            </Text>
          </Text>
        </View>
        <View style={styles.Box}>
          <Text style={styles.welcomeText}> Welcome Farmer {username}!</Text>
          <Text style={styles.text}>Welcome to the Hub of your Business!</Text>
          <Text style={styles.text}>
            Add up to your inventory and receive offers in your favorite
            platforms!!
          </Text>
        </View>
      </View>
      <View style={[styles.container, expanded && styles.expanded]}>
        <TouchableOpacity onPress={toggleExpanded} style={styles.header}>
          <Text style={styles.title}>
            Welcome Farmers We've got changes to make!
          </Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.content}>
            <Text>
              93% of Americans want to eat healthy, and 63% of consumers say
              they try to eat healthy most or all of the time. While 93% of
              Americans express the desire to eat healthy, only 10% of consumers
              say they eat healthy ALWAYS.
            </Text>
            <Text>
              More than 80% of Americans' diets are low in vegetables, fruits
              and dairy, according to the 2020-2025 Dietary Guidelines for
              Americans.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   text: {
//     color: "white",
//     fontWeight: "200",
//     padding: 10,
//   },
//   welcomeText: {
//     color: "white",
//     fontWeight: "400",
//     padding: 10,
//   },
//   start: {
//     flexDirection: "row",
//     textAlign: "center",
//     marginTop: 50,
//     backgroundColor: "#9bdea1",
//     paddingBottom: 10,
//   },
//   Icons: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 700,
//   },
//   Box: {
//     justifyContent: "space-around",
//     backgroundColor: "#006400",
//     height: 100,
//     width: 350,
//     alignContent: "flex-end",
//     borderRadius: 20,
//     position: "relative",
//     left: 5,
//   },
//   container: {
//     backgroundColor: "#ffffff",
//     marginVertical: 10,
//     borderRadius: 40,
//     overflow: "hidden",
//   },
//   expanded: {
//     marginBottom: 100, // Add extra margin when expanded
//     borderColor: "black",
//     borderRadius: 40,
//   },
//   header: {
//     paddingVertical: 30,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#cccccc",
//     backgroundColor: "green",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   content: {
//     padding: 10,
//   },
// });

const styles = StyleSheet.create({
  // General text style (you can use this for basic text)
  text: {
    color: "#ffffff",        // White text for visibility against dark backgrounds
    fontWeight: "300",       // Thin font weight for sleek look
    padding: 10,             // Padding around the text
  },
  // Welcoming text with dark green color and shadow effect
  welcomeText: {
    color: "#ADD8E6",        // Dark green text for the title
    fontWeight: "600",       // Bolder than regular text, for emphasis
    fontSize: 24,            // Bigger font size for importance
    textShadowColor: "#000000", // Adds a subtle shadow behind the text
    textShadowOffset: { width: 2, height: 2 }, // Shadow positioning
    textShadowRadius: 4,     // How blurry the shadow is
    padding: 10,             // Padding around the text
    textAlign: "center",     // Center-aligns the text
  },
  // Style for a start section, using a gradient-like effect
  start: {
    flexDirection: "row",        // Aligns items horizontally
    textAlign: "center",         // Centers text in the row
    marginTop: 50,               // Adds space from the top of the screen
    backgroundColor: "#ADD8E6",  // Light green background
    paddingBottom: 10,           // Padding at the bottom of the box
    borderRadius: 20,            // Rounds the corners of the box
  },
  // Icon container for aligning icons in a row
  Icons: {
    flexDirection: "row",         // Aligns icons horizontally
    justifyContent: "space-around", // Spreads icons evenly
    marginTop: 700,               // Positions icons lower on the screen
  },
  // Box style with improved shadow and border for a "cool" look
  Box: {
    justifyContent: "space-around",    // Spreads content inside the box
    backgroundColor: "#006400",        // Dark green background color
    height: 100,                       // Box height
    width: 350,                        // Box width
    alignContent: "center",            // Centers content inside the box
    borderRadius: 20,                  // Rounds corners for a modern look
    shadowColor: "#000",               // Black shadow for a raised effect
    shadowOffset: { width: 0, height: 5 }, // Slight shadow below the box
    shadowOpacity: 0.5,                // How dark the shadow is
    shadowRadius: 10,                  // How blurry the shadow is
    position: "relative",              // Relative positioning
    left: 5,                           // Moves the box slightly to the left
  },
  // Main container with rounded corners and hidden overflow for better design
  container: {
    backgroundColor: "#ADD8E6",        // White background
    marginVertical: 10,                // Space above and below the container
    borderRadius: 40,                  // Highly rounded corners for a clean look
    overflow: "hidden",                // Prevents content from spilling outside the container
    shadowColor: "#000",               // Adds a subtle shadow to the container
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  // Expanded container to give space for more content and look polished
  expanded: {
    marginBottom: 100,                 // Extra space at the bottom
    borderColor: "#0C9944",            // Dark green border to match theme
    borderWidth: 2,                    // Adds a thin border
    borderRadius: 40,                  // Rounded corners
  },
  // Header with vibrant green background and padding for spacing
  header: {
    paddingVertical: 30,               // Vertical padding (top and bottom)
    paddingHorizontal: 10,             // Horizontal padding (left and right)
    borderBottomWidth: 1,              // Adds a bottom border
    borderBottomColor: "#cccccc",      // Light gray for the border
    backgroundColor: "#006400",        // Dark green background color
  },
  // Title styling with dark green color and larger text for impact
  title: {
    fontSize: 22,                      // Larger text size
    fontWeight: "bold",                // Makes the text bold
    color: "#ffffff",                  // Dark green color
    textAlign: "center",               // Center-aligns the title
    textTransform: "uppercase",        // Makes the title text all uppercase
  },
  // Content padding to create space around the text inside containers
  content: {
    padding: 15,                       // Adds padding inside content containers
  },
});