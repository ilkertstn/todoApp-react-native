import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ViewToDo from "./src/components/ViewToDo";
import MyInputComponent from "./src/components/Input";
import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "700" }}>Today's Tasks</Text>
      <View style={{ paddingTop: 20, flex: 1 }}>
        <ViewToDo
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </View>

      <View style={styles.inputContainer}>
        <MyInputComponent addTask={addTask} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e2e2",
    paddingLeft: 20,
    paddingTop: 80,
  },
  inputContainer: {
    bottom: 70,
  },
});
