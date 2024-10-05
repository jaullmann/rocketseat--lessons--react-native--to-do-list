import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: '#262626',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 11.3,
    marginHorizontal: 24,
    marginVertical: 8,
    padding: 12
  },
  toggleButton: {
    width: 17,
    height: 17,
    borderRadius: 12,
    borderColor: '#4EA8DE',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkedIcon: {
    color: '#F2F2F2'
  },
  description: {
    flexDirection: 'row',
    flex: 1,
    textAlign: 'left',
    fontFamily: 'Inter_500',
    fontSize: 14,
    color: '#F2F2F2'
  }  
})
