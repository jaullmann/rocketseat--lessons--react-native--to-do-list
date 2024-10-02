import { Text, TouchableOpacity, View } from "react-native";
import { PiTrash } from "react-icons/pi";
import { MdDone } from "react-icons/md";

import { styles } from "./styles";
import { useState } from "react";


export function ActionCard(description: string) {
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
        {description}
      </Text>
      <PiTrash style={styles.trashIcon}/>

    </View>
  )
}