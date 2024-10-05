import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A'    
  },
  header: {
    height: 173,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
  },
  logo: {        
    width: 110.34,
    height: 32,
    marginTop: 70,
    marginBottom: 60
  },
  form: {  
    flex: 1,      
    marginRight: 24,
    marginLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4
  },
  input: { 
    flex: 1, 
    height: 53,       
    color: '#F2F2F2',
    backgroundColor: '#262626',
    borderRadius: 6,
    borderColor: '#0D0D0D',
    borderWidth: 1,
    padding: 16,
    textAlign: 'left',
    textAlignVertical: 'center'
  },  
  button: {
    width: 50,
    height: 50,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },  
  countersSection: {
    marginHorizontal: 24,
    marginTop: 55,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',    
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333'
  }, 
  listEmptyTextBold: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080',
    textAlign: 'center'
  },
  listEmptyText: {
    fontSize: 14,    
    color: '#808080',
    textAlign: 'center'
  },
  clipboardImage: {        
    width: 56,
    height: 56,
    marginTop: 48,
    marginBottom: 16,
    alignSelf: 'center',
  },
})