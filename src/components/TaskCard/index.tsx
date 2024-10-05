import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { useState } from "react";

type Props = {
  task: string,
  onRemove: () => void,
}


export function TaskCard({ task, onRemove }: Props) {
  const [actionDone, setActionDone] = useState(false);

  function toggleCardState() {
    setActionDone(!actionDone);
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.toggleButton}
        onPress={toggleCardState}
      >
        { actionDone && <MaterialIcons name="done" size={10} color='#D9D9D9' /> }
      </TouchableOpacity>     
      <Text style={styles.description}>
        {task}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <AntDesign name="delete" size={16} color='#808080' />
      </TouchableOpacity>    

    </View>
  )
}