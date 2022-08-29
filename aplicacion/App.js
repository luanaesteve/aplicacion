import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import login from '../src/UI/Components/login';

export default function App() {
  return(
    <View>
      <StatusBar style="auto" />
    <login></login>
    </View>
  );
}