import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 19,
    gap: 8,
    flexDirection: 'row',
  },
  createdLabel: {
    color: '#1E6F9F',
    fontSize: 14,
    fontFamily: 'Inter_500'    
  }, 
  doneLabel: {
    color: '#8284FA',
    fontSize: 14,
    fontFamily: 'Inter_500'   
  },  
  amount: {
    height: 19,
    width: 25,
    borderRadius: 10,
    backgroundColor: '#333333',
    fontSize: 12,
    fontFamily: 'Inter_500',
    color: '#D9D9D9',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})