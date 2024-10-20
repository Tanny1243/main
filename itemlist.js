import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { getUser } from "./firebase.util";


export default function ItemList({ latestItemList, navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentFarmer, setCurrentFarmer] = useState(null);
  const goToDetail = async (item) => {
    alert(latestItemList);
    const farmerData = await getUser(item.email);
    setCurrentFarmer(farmerData);
    setModalVisible(true);
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
              Farmer Name: {currentFarmer && currentFarmer.username}
            </Text>
            {currentFarmer && currentFarmer.bio && (
              <Text style={styles.modalText}>
                Bio: {currentFarmer && currentFarmer.bio}
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
        Fresh Produce.
      </Text>
      {latestItemList && (
        <View>
          <Text style={{ fontSize: 12, fontWeight: "normal", paddingLeft: 5 }}>
            Click Items to see farmer's info!
          </Text>
          <View style={styles.container}>
            {latestItemList.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => goToDetail(item)}
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
                      <Text style={styles.productPrice}>${item.price}</Text>
                      <Text style={styles.sellerName}>Farmer {item.name}</Text>
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


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignSelf: "center",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    height: "calc(100% - 8px)",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
  itemContainer: {
    width: "50%",
  },
  productImage: {
    width: "100%",
    aspectRatio: 1, // Keeps aspect ratio of image
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 16,
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
  sellerName: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
});