import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>App</Text>
      <Image
        style={{width: 200, height: 200}}
        source={{
          uri: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D ',
        }}
      />

      <Pressable
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
        }}
        onPress={() => {
          Alert.alert('Button Clicked');
        }}>
        <Text>Press Me</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
