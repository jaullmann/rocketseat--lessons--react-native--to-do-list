import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12
  },
  toggleButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#4EA8DE',
    borderWidth: 1,
  },
  checkedIcon: {
    color: '#F2F2F2'
  },
  description: {
    fontFamily: 'inter',
    fontSize: 14,
    color: '#F2F2F2'
  },
  trashIcon: {
    width: 32,
    height: 32,
    color: '#808080'
  }
})
