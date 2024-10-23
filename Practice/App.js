import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  // Define a piece of state called 'count' with initial value 0
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>You clicked {count} times!</Text>
      {/* Button to increase the counter */}
      <Button title="Click me!" onPress={() => setCount(count + 1)} />
    </View>
  );
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
});
