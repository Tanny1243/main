import { view, Text } from "react-native";
import React from "react";

export default function ProductDetail() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  useEffect(() => {
    const checkForSubscription = setTimeout(() => {
      setIsModalVisible(() => !isModalVisible);
    }, 1500);
    return () => clearTimeout(checkForSubscription);
  }, []);
  const handleClose = () => {
    // sign up the user and close the modal
    setIsModalVisible(() => !isModalVisible);
  };
  return (
    <View>
      <Text>Product Detail</Text>
      <Button title="Close" onPress={handleClose} />
    </View>
  );
}