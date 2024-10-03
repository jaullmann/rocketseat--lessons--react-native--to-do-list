import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FlatList, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { TaskCard } from "../../components/TaskCard";
import { Counter } from "../../components/Counter";
import { styles } from "./styles";

export function Home(){
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>        
        <Image source={{uri: '../../../assets/appLogo.png'}}/>
        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity style={styles.button}>
            <AiOutlinePlusCircle style={styles.buttonIcon}/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.countersSection}>
        <Counter 
          name={'Criadas'}
          amount={0}
        />
        <Counter 
          name={'Concluídas'}
          amount={0}
        />
      </View>      

    </View>
  )
}