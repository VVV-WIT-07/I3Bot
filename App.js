import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.chatContainer}>
        {/* Renderice sus mensajes aquí */}
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Write your message..." />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});





