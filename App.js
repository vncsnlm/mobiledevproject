import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <View>
      <Text>Task List:</Text>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </View>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <View style={styles.container}>
      <Text>Welcome to React Native!</Text>
      <Button
        title="Press me"
        onPress={() => {
          // Handle button press
        }}
      />
      <StatusBar style="auto" />

      {/* Display ToDoList and pass tasks as a prop */}
      <ToDoList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
