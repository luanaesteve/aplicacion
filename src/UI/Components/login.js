
export default function login() {
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}> NASHE</Text>
        <TextInput style={styles.TextInput}
          placeholder="Email"
        />
        <TextInput style={styles.TextInput}
          placeholder="Contraseña"
        />
        
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
  