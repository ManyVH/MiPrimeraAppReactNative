import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import { FlatList, ScrollView } from "react-native-gesture-handler";

export default function Actividad_6() {

  
  const [datos, setDatos] = useState([
    { key: "Materia 1", color: false },
    { key: "Materia 2", color: false },
    { key: "Materia 3", color: false },
    { key: "Materia 4", color: false },
    { key: "Materia 5", color: false },
    { key: "Materia 6", color: false },
    { key: "Materia 7", color: false },
    { key: "Materia 8", color: false },
    { key: "Materia 9", color: false },
    { key: "Materia 10", color: false },
    { key: "Materia 11", color: false },
  ]);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    disenhoCaja: {
      margin: 10,
      fontSize: 18,
      textAlign: "center",
      borderWidth: 1,
      borderRadius: 3,
      padding: 5,
    },
    topbar: {
      fontSize: 30,
      fontWeight: "bold",
      margin: 20,
      width: 500,
      backgroundColor: "#b0c9cf",
      textAlign: "center",
    },
    materias: {
      fontSize: 30,
      textAlign: "center",
      margin: 10,
      fontStyle: "italic",
      color: "#25306b",
    },
    materiasActiva: {
      fontSize: 30,
      textAlign: "center",
      margin: 10,
      fontStyle: "italic",
      color: "#ffffff",
      backgroundColor: "#264573",
    },
    scroll: {
      borderColor: "fffff",
      borderWidth: 1,
      borderRadius: 10,
      width: 300,
    },
    list: {
      height: 400,
    },
  });
 
  let materiaBuscada = ""
  const Materias = (props) => {
    return (
      <View>
        <Text style={props.color ? styles.materiasActiva : styles.materias}>
          {props.nombre}
        </Text>
      </View>
    );
  };

 
 
  return (
    <View style={styles.container}>
      <Text style={styles.topbar}>{"Materias"}</Text>

      <ScrollView showsVerticalScrollIndicator="true" style={styles.scroll}>
      <FlatList
          style={styles.list}
          data={datos}
          renderItem={({ item }) => (
            <Materias nombre={item.key} color={item.color} />
          )}
        />

      </ScrollView>
      <TextInput style={styles.disenhoCaja} 
      
      onChangeText={(newText) => materiaBuscada=newText}
      placeholder={"Buscar una materia"}/>
      <Button
        onPress={() => {
          for (let index = 0; index < datos.length; index++) {
            if (datos[index].key ===materiaBuscada) {
              console.log(datos[index].key)
              const datosnuevos = [...datos]
              datosnuevos[index].color = true
              setDatos(datosnuevos)

            }
            
          }
        }}
        title={"Revisar materia"}
      />
      <StatusBar style="auto" />
    </View>
  );
}
