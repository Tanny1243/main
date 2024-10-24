import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { getUser } from "./firebase.util";

export default function ItemList({ latestItemList, navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentFarmer, setCurrentFarmer] = useState(null);

  const goToDetail = async (item) => {
    try {
      const farmerData = await getUser(item.email);
      console.log('Farmer Data:', farmerData);  // Check if data is coming correctly
      setCurrentFarmer(farmerData);
      setModalVisible(true);
    } catch (error) {
      console.error('Error fetching farmer data:', error);
      Alert.alert("Error", "Failed to fetch farmer data.");
    }
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Owner Name: {currentFarmer && currentFarmer.username ? currentFarmer.username : 'Unknown'}
            </Text>
            {currentFarmer && currentFarmer.bio && (
              <Text style={styles.modalText}>
                Info: {currentFarmer.bio}
              </Text>
            )}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Okay</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>
        New Donations 
      </Text>
      {latestItemList && (
        <View>
          <Text style={{ fontSize: 12, fontWeight: "normal", paddingLeft: 5 }}>
            Click Items to see your post's info!
          </Text>
          <View style={styles.container}>
            {latestItemList.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    console.log('Item clicked:', item);  // Debugging the item being clicked
                    goToDetail(item);
                  }}
                  key={item.title}
                  style={styles.itemContainer}
                >
                  <View style={styles.card}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.productImage}
                    />
                    <View>
                      <Text style={styles.productTitle}>{item.title}</Text>
                      <Text style={styles.productPrice}>Quantity: {item.price}</Text>
                      <Text style={styles.sellerName}>Manager {item.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
}

// Updated styles for your components
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#ADD8E6",  // Light blue background
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFFFFF",  // Clean white for modal background
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",  // Subtle shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,  // Material elevation
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignSelf: "center",
    backgroundColor: "#006400",  // Dark green for buttons
  },
  buttonOpen: {
    backgroundColor: "#006400",  // Consistent dark green theme
  },
  buttonClose: {
    backgroundColor: "#006400",  // Dark green for closing as well
  },
  textStyle: {
    color: "#FFFFFF",  // White text for button contrast
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    color: "#7ED957",  // Light green for modal text
  },
  card: {
    borderWidth: 1,
    borderColor: "#E0E0E0",  // Light gray border for a clean look
    borderRadius: 12,
    padding: 12,
    margin: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,  // Elevation for depth
    backgroundColor: "#FFFFFF",  // Clean white for cards
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    backgroundColor: "#ADD8E6",  // Light blue background
  },
  itemContainer: {
    width: "50%",
    padding: 10,
  },
  productImage: {
    width: "100%",
    aspectRatio: 1,  // Maintains image aspect ratio
    borderRadius: 8,  // Rounded corners for images
  },
  productTitle: {
    fontSize: 16,
    marginTop: 10,
    color: "#006400",  // Dark green for product titles
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    color: "#7ED957",  // Light green for product prices
    marginTop: 5,
  },
  sellerName: {
    fontSize: 12,
    color: "#7ED957",  // Light green for seller names
    marginTop: 5,
  },
});




// import {
//   View,
//   Text,
//   Pressable,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
// } from "react-native";
// import React, { useState } from "react";
// import { getUser } from "./firebase.util";


// export default function ItemList({ latestItemList, navigation, route }) {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [currentFarmer, setCurrentFarmer] = useState(null);
//   const goToDetail = async (item) => {
//     // This function is broker
//     const farmerData = await getUser(item);
//     setCurrentFarmer(farmerData);
//     setModalVisible(true);
  
//   };
//   return (
//     <View>
//       <Modal
//         animationType="slide"
//         transparent={false}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>
//               Farmer Name: {currentFarmer && currentFarmer.username}
//             </Text>
//             {currentFarmer && currentFarmer.bio && (
//               <Text style={styles.modalText}>
//                 Bio: {currentFarmer && currentFarmer.bio}
//               </Text>
//             )}
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Okay</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>
//         Fresh Produce.
//       </Text>
//       {latestItemList && (
//         <View>
//           <Text style={{ fontSize: 12, fontWeight: "normal", paddingLeft: 5 }}>
//             Click Items to see farmer's info!
//           </Text>
//           <View style={styles.container}>
//             {latestItemList.map((item) => {
//               return (
//                 <TouchableOpacity
//                   onPress={(item) => {
//                     alert(item.title);
//                     goToDetail(item)
//                   }}
                    
//                   key={item.title}
//                   style={styles.itemContainer}
//                 >
//                   <View style={styles.card}>
//                     <Image
//                       source={{ uri: item.image }}
//                       style={styles.productImage}
//                     />
//                     <View>
//                       <Text style={styles.productTitle}>{item.title}</Text>
//                       <Text style={styles.productPrice}>${item.price}</Text>
//                       <Text style={styles.sellerName}>Farmer {item.name}</Text>
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               );
//             })}
//           </View>
//         </View>
//       )}
//     </View>
//   );
// }


// // const styles = StyleSheet.create({
// //   centeredView: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginTop: 22,
// //   },
// //   modalView: {
// //     margin: 20,
// //     backgroundColor: "white",
// //     borderRadius: 20,
// //     padding: 35,
// //     alignItems: "flex-start",
// //     shadowColor: "#000",
// //     shadowOffset: {
// //       width: 0,
// //       height: 2,
// //     },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 4,
// //     elevation: 5,
// //   },
// //   button: {
// //     borderRadius: 20,
// //     padding: 10,
// //     elevation: 2,
// //     alignSelf: "center",
// //   },
// //   buttonOpen: {
// //     backgroundColor: "#F194FF",
// //   },
// //   buttonClose: {
// //     backgroundColor: "#2196F3",
// //   },
// //   textStyle: {
// //     color: "white",
// //     fontWeight: "bold",
// //     textAlign: "center",
// //   },
// //   modalText: {
// //     marginBottom: 15,
// //     textAlign: "center",
// //   },
// //   card: {
// //     borderWidth: 1,
// //     borderColor: "#ddd",
// //     borderRadius: 8,
// //     padding: 10,
// //     margin: 10,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 4,
// //     height: "calc(100% - 8px)",
// //   },
// //   container: {
// //     flex: 1,
// //     flexDirection: "row",
// //     flexWrap: "wrap",
// //     alignContent: "flex-start",
// //   },
// //   itemContainer: {
// //     width: "50%",
// //   },
// //   productImage: {
// //     width: "100%",
// //     aspectRatio: 1, // Keeps aspect ratio of image
// //     borderRadius: 8,
// //   },
// //   productTitle: {
// //     fontSize: 16,
// //     marginTop: 10,
// //   },
// //   productPrice: {
// //     fontSize: 14,
// //     color: "#333",
// //     marginTop: 5,
// //   },
// //   sellerName: {
// //     fontSize: 12,
// //     color: "#666",
// //     marginTop: 5,
// //   },
// // });

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//     backgroundColor: "#ADD8E6",  // Light blue background
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "#FFFFFF",  // Clean white for modal background
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "flex-start",
//     shadowColor: "#000",  // Subtle shadow for depth
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,  // Material elevation
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//     alignSelf: "center",
//     backgroundColor: "#006400",  // Dark green for buttons
//   },
//   buttonOpen: {
//     backgroundColor: "#006400",  // Consistent dark green theme
//   },
//   buttonClose: {
//     backgroundColor: "#006400",  // Dark green for closing as well
//   },
//   textStyle: {
//     color: "#FFFFFF",  // White text for button contrast
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//     fontSize: 18,
//     color: "#7ED957",  // Light green for modal text
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: "#E0E0E0",  // Light gray border for a clean look
//     borderRadius: 12,
//     padding: 12,
//     margin: 12,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,  // Elevation for depth
//     backgroundColor: "#FFFFFF",  // Clean white for cards
//   },
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     alignContent: "flex-start",
//     backgroundColor: "#ADD8E6",  // Light blue background
//   },
//   itemContainer: {
//     width: "50%",
//     padding: 10,
//   },
//   productImage: {
//     width: "100%",
//     aspectRatio: 1,  // Maintains image aspect ratio
//     borderRadius: 8,  // Rounded corners for images
//   },
//   productTitle: {
//     fontSize: 16,
//     marginTop: 10,
//     color: "#006400",  // Dark green for product titles
//     fontWeight: "bold",
//   },
//   productPrice: {
//     fontSize: 14,
//     color: "#7ED957",  // Light green for product prices
//     marginTop: 5,
//   },
//   sellerName: {
//     fontSize: 12,
//     color: "#7ED957",  // Light green for seller names
//     marginTop: 5,
//   },
// });