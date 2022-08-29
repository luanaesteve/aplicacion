import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Image } from 'react-native';
import img from '../public/Imagenes/img';
import img1 from '../public/Imagenes/img';

export default function App() {
  return(
    <View style={styles.container}>
     <div style={styles.ImagenSuperior}>
      <img src={img.img1}/>
     </div>
      <Text style={styles.titulo}> NASHE</Text>
      <TextInput style={styles.TextInput}
        placeholder="Email"
      />
      <TextInput style={styles.TextInput}
        placeholder="Contraseña"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
  fontSize:80,
  },

  TextInput: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 20,
  },
  ImagenSuperior: {
  position: 'absolute',
  top: 50,

  }
});
