import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 19,
    gap: 8,
  },
  createdLabel: {
    color: '#1E6F9F',
    fontSize: 14,
    fontFamily: 'Inter Bold'    
  }, 
  doneLabel: {
    color: '#8284FA',
    fontSize: 14,
    fontFamily: 'Inter Bold'    
  },  
  amount: {
    borderRadius: 999,
    backgroundColor: '#333333',
    fontSize: 12,
    fontFamily: 'Inter Bold',
    color: '#D9D9D9',
    marginVertical: 2,
    marginHorizontal: 8
  }
})