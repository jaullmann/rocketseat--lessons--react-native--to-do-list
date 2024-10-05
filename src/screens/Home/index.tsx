import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { TaskCard } from "../../components/TaskCard";
import { Counter } from "../../components/Counter";
import { styles } from "./styles";
import MainLogo from '../../../assets/appLogo.png';
import Clipboard from '../../../assets/clipboard.png';

export function Home(){
  
  const [tasks, setTasks] = useState<string[]>([]);
  const [description, setDescription] = useState('');

  function handleTaskAdd() {
    if (tasks.includes(description)) {
      return Alert.alert("Erro", "Essa tarefa já foi registrada!");
    }

    if (description.length < 4) {
      return Alert.alert("Erro", "Digite uma tarefa válida para adicionar.");
    }

    setTasks(prevState => [...prevState, description]);
    setDescription('');
  }

  function handleCardRemove(task: string) {    
    Alert.alert("Remover", `Excluir a tarefa "${task}"?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(taskDescription => taskDescription !== task))
      },
      {
        text: 'Não',
        style: 'cancel'
      } 
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>        
        <Image 
          style={styles.logo}
          source={MainLogo}
        />
        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setDescription}
            value={description}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <AntDesign name="pluscircleo" size={16} color='#D9D9D9' />
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

      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TaskCard 
            key={item} 
            task={item} 
            onRemove={() => handleCardRemove(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <Image
              style={styles.clipboardImage}
              source={Clipboard}
            />
            <Text style={styles.listEmptyTextBold}>
              Você ainda não tem tarefas cadastradas.
            </Text>
            <Text style={styles.listEmptyText}>
              Crie tarefas e organize seus itens a fazer.
            </Text>
          </>          
        )}
      />
          

    </View>
  )
}