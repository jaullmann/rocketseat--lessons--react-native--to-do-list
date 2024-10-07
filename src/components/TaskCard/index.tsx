import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { useState } from "react";

type Props = {
  task: string,
  onChecked: (done: boolean) => void,
  onRemove: () => void,
}

export function TaskCard({ task, onChecked, onRemove }: Props) {
  const [actionDone, setActionDone] = useState(false);

  function toggleCardState() {
    const newStatus = !actionDone; 
    setActionDone(newStatus);
    onChecked(newStatus);  
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={toggleCardState}
      >
        {actionDone && <MaterialIcons name="done" size={10} color='#D9D9D9' />}
      </TouchableOpacity>      
      
      <Text
        style={[styles.description, actionDone && styles.doneText]}
      >
        {task}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <AntDesign name="delete" size={16} color='#808080' />
      </TouchableOpacity>
    </View>
  )
}
