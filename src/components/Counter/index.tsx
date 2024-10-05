import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  amount: number; 
}

export function Counter({name, amount}: Props) {
  return (
    <View style={styles.container}>
      <Text        
         style={name === "Criadas" ? styles.createdLabel : styles.doneLabel}
      >
        {name}
      </Text>
      <Text style={styles.amount}>
        {amount}
      </Text>
    </View>
  )
}