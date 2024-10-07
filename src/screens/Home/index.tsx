import AntDesign from '@expo/vector-icons/AntDesign';
import { useState, useEffect } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { TaskCard } from "../../components/TaskCard";
import { Counter } from "../../components/Counter";
import { styles } from "./styles";
import MainLogo from '../../../assets/appLogo.png';
import Clipboard from '../../../assets/clipboard.png';

type Task = {
  id: number;
  text: string;
  done: boolean;
};

export function Home(){ 
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskCounter, setTaskCounter] = useState(0);
  const [openTasks, setOpenTasks] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);
  const [description, setDescription] = useState('');
  const [displayedTasks, setDisplayedTasks] = useState<Task[]>([]);  

  function handleTaskAdd() {
    if (description.length < 4) {
      return Alert.alert("Erro", "Digite uma tarefa válida para adicionar.");
    }
    const index = taskCounter;
    setTasks(prevState => [...prevState, { id: index, text: description, done: false }]);
    setDescription('');
    setTaskCounter(index + 1);
    setOpenTasks(openTasks + 1);
  }

  function handleCardRemove(key: number) {
    const taskToRemove = tasks.find(task => task.id === key);
    if (taskToRemove) {
      Alert.alert("Remover", `Excluir a tarefa "${taskToRemove.text}"?`, [
        {
          text: 'Sim',
          onPress: () => setTasks(prevState => prevState.filter(task => task.id !== key))
        },
        {
          text: 'Não',
          style: 'cancel'
        } 
      ]);
    }
  }
  
  function handleTaskDone(key: number) {
    const pressedTask = tasks.find(task => task.id === key);
    if (pressedTask) {
      setTasks(prevState => prevState.map(task => 
        task.id === key ? { ...task, done: !task.done } : task
      ));
    }
  }

  useEffect(() => {
    const openTasksCount = tasks.filter(task => !task.done).length;
    const doneTasksCount = tasks.filter(task => task.done).length;
    setOpenTasks(openTasksCount);
    setDoneTasks(doneTasksCount);

    const openTasksArray = tasks.filter(task => !task.done);
    const doneTasksArray = tasks.filter(task => task.done);
    setDisplayedTasks(openTasksArray.concat(doneTasksArray));
  }, [tasks]);

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
        data={displayedTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskCard            
            task={item.text} 
            onChecked={() => handleTaskDone(item.id)}
            onRemove={() => handleCardRemove(item.id)} 
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