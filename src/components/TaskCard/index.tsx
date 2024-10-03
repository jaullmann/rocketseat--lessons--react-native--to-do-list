import { Text, TouchableOpacity, View } from "react-native";
import { PiTrash } from "react-icons/pi";
import { MdDone } from "react-icons/md";

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
        { actionDone && <MdDone style={styles.checkedIcon}/> }
      </TouchableOpacity>     
      <Text style={styles.description}>
        {task}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <PiTrash style={styles.trashIcon} />
      </TouchableOpacity>    

    </View>
  )
}