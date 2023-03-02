import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [materia, setMateria] = useState("inscribirse a materia")
  const [materia2, setMateria2] = useState("inscribirse a materia")
  const [materia3, setMateria3] = useState("inscribirse a materia")
  const [activo, setMostrar] = useState(true)
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.cajaTexto}
        defaultValue={materia}
        onChangeText={(newText) => setMateria(newText)}
        
      />
      <TextInput 
        style={styles.cajaTexto}
        defaultValue={materia2}
        onChangeText={(newText) => setMateria2(newText)}
        
      />
      <TextInput 
        style={styles.cajaTexto}
        defaultValue={materia3}
        onChangeText={(newText) => setMateria3(newText)}
        
      />
      <Button
      onPress={()=>{
        setMostrar(!activo)
      }

    }
      
      title = {"Mostrar materias"}
      />
      <View >
      {activo ? "Sin materias": <><Text>Materias Inscritas</Text><Text>{materia}</Text><Text>{materia2}</Text><Text>{materia3}</Text></>}

      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


*const getNombre = (nombre, carrera, especialidad) =>{
    return nombre+" "+carrera+" "+especialidad
  }

  const Materias = (props) =>{
    return (
      <View>
      <Text> {props.nombre}</Text>
      </View>
    )
  }

  const [activo, setActivo] = useState(true);

  const [materia, setMateria] = useState("inscribirse a materia") 

<Text>Hola {getNombre("Manys","Sin carrera","Pero si Fullstak")}</Text>
      <Button title="Soy un Boton" color="#841584" accessibilityLabel="Boton" />

      <TextInput style={
        styles.cajaTexto
      }
      defaultValue="Proporciona el nombre"/>
      <Materias nombre={materia}/>
      <Materias nombre="Redes chidas 2"/>

      <TextInput 
        style={styles.cajaTexto}
        defaultValue={materia}
        onChangeText={(newText) => setMateria(newText)}
        
      />

      <Button
      onPress={()=>{
        setActivo(false)
      }}
      disabled={!activo}
      title = {activo ? "Click ..." : "No activo"}
      />

*/
       