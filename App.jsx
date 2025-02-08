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
  Linking,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>App</Text>
      <Image
        style={style.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D ',
        }}
      />

      <Pressable
        style={style.button}
        onPress={() => {
          Linking.openURL('http://www.github.com/avogadronuggies');
        }}>
        <Text style={style.btnText}>Press Here</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 30,
    fontWeight: '900',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});
