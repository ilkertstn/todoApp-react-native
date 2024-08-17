import React from "react";
import { Dimensions, Text, View, TouchableOpacity, Button } from "react-native";
const { width } = Dimensions.get("window");

const ViewToDo = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <View>
      {tasks.map((task, index) => (
        <View
          key={index}
          style={{
            width: width * 0.9,
            backgroundColor: "white",
            height: width * 0.15,
            justifyContent: "space-between",
            padding: 5,
            borderRadius: 10,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
            onPress={() => toggleTask(index)}
          >
            <View style={{ backgroundColor: "#379fa3", borderRadius: 5 }}>
              <Text
                style={{
                  padding: 5,
                  color: "white",
                  fontWeight: "700",
                  fontSize: 10,
                }}
              >
                {index + 1}
              </Text>
            </View>
            <Text
              style={{
                paddingLeft: 7,
                textDecorationLine: task.completed ? "line-through" : "none",
                flex: 1,
              }}
            >
              {task.text}
            </Text>
          </TouchableOpacity>
          <Button title="x" color="red" onPress={() => deleteTask(index)} />
        </View>
      ))}
    </View>
  );
};

export default ViewToDo;
