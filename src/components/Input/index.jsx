import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const MyInputComponent = ({ addTask }) => {
  const [text, setText] = useState("");

  const handlePress = () => {
    if (text) {
      addTask(text);
      setText("");
    } else {
      alert("Please enter a task");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        onChangeText={setText}
        value={text}
      />
      <View style={{ backgroundColor: "white", borderRadius: "100%" }}>
        <Button color={"gray"} title="+" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    width: width * 0.9,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: "white",
    marginRight: 10,
  },
});

export default MyInputComponent;
