import AntDesign from '@expo/vector-icons/AntDesign';
import { useState, useEffect } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { TaskCard } from "../../components/TaskCard";
import { Counter } from "../../components/Counter";
import { styles } from "./styles";
import MainLogo from '../../../assets/appLogo.png';
import Clipboard from '../../../assets/clipboard.png';

export function Home(){
  
  const [tasks, setTasks] = useState<string[]>([]);
  const [openTasks, setOpenTasks] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);
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
    setOpenTasks(openTasks + 1);
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

  function handleTaskDone(checked: boolean) {
    if (checked) {
      setOpenTasks(openTasks - 1);
      setDoneTasks(doneTasks + 1);
    } else {
      setOpenTasks(openTasks + 1);
      setDoneTasks(doneTasks - 1);
    }    
  }

  useEffect(() => {    
  }, [openTasks, doneTasks])

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
          amount={openTasks}
        />
        <Counter 
          name={'Concluídas'}
          amount={doneTasks}
        />
      </View>  

      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TaskCard 
            key={item} 
            task={item} 
            onChecked={handleTaskDone}
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