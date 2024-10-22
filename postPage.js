import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { app, db } from "./firebase.util";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";

export default function PostPage({ route }) {
  const { email } = route.params.userData;
  const [loading, setLoading] = useState(false);
  const storage = getStorage();
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const placeHolderImg = require("./assets/icon.png");

  const onSubmitMethod = async (value) => {
    setLoading(true);
    const resp = await fetch(image);
    const blob = await resp.blob();
    // No communityPost so function beneath this wont work
    const storageRef = ref(storage, "communityPost/" + Date.now() + "jpg");

    // uploadBytes(storageRef, blob)
    //   .then((snapshot) => {
    //     console.log("Uploaded a blob or file");
    //   })
    //   .then((resp) => {
    //     getDownloadURL(storageRef).then(async (downloadURL) => {
    //       console.log(downloadURL);
    //       value.image = downloadURL;
    //       value.email = email;

    //     });
    //   });
    const docRef = await addDoc(collection(db, "posts"), value);

    if (docRef.id) {
      setLoading(false);
      Alert.alert("Sucess!!!", "Post Added Successfully!!!");
    }
  };

  return (
    <ScrollView
      style={{ backgroundColor: "#ADD8E6", marginTop: 30, padding: 20 }}
    >
      <Text style={styles.new}>Add A New Item</Text>
      <Formik
        initialValues={{ title: "", price: "", image: "",  }}
        onSubmit={(value) => onSubmitMethod(value)}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            console.log("Title not Present");
            ToastAndroid.show("Title must be there ", ToastAndroid.SHORT);
            errors.title = "Title Must Be There";
            return errors;
          }
          if (!image) {
            console.log("Image not Present");
            ToastAndroid.show("Image must be there ", ToastAndroid.SHORT);
            errors.image = "Image Must Be There";
            return errors;
          }
          if (!values.price) {
            console.log("Price not Present");
            ToastAndroid.show("Price must be there ", ToastAndroid.SHORT);
            errors.price = "Price Must Be There";
          }
          return errors;
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
          errors,
        }) => (
          <View style={styles.container}>
            <TouchableOpacity onPress={pickImage}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{ width: 100, height: 100, borderRadius: 15 }}
                />
              ) : (
                <Image
                  source={require("./assets/icon.png")}
                  style={{ width: 100, height: 100, borderRadius: 15 }}
                />
              )}
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={values.title}
              onChangeText={handleChange("title")}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              value={values.price}
              keyboardType="number-pad"
              onChangeText={handleChange("price")}
            />
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                backgroundColor: loading ? "#ccc" : "#0C9944",
                borderRadius: 10,
                height: 30,
              }}
              disabled={loading}
              className="p-4 bg-blue-500 rounded-full mt-10"
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text
                  className="text-white text-center text-[16px]"
                  style={{ color: "#fff", textAlign: "center", fontSize: 16 }}
                >
                  Submit
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   input: {
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//     marginTop: 10,
//     marginBottom: 5,
//     paddingHorizontal: 17,
//     fontSize: 17,
//   },
//   new: {
//     fontSize: 20,
//     fontWeight: "bold",
//     fontWeight: "bold",
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ADD8E6",  // Light blue background
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",  // Light gray border
    borderRadius: 12,  // Rounded corners for a modern look
    padding: 12,
    marginTop: 12,
    marginBottom: 8,
    fontSize: 17,
    color: "#333",  // Dark text for readability
    backgroundColor: "#FFFFFF",  // White background for contrast
    shadowColor: "#000",  // Soft shadow for depth
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,  // Subtle elevation for a refined look
  },
  new: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#006400",  // Dark green for titles or emphasized text
    marginTop: 15,
  },
});
