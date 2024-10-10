import { Pressable, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const stylesRegister = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 20,
  },
  bannerText: {
    textAlign: 'center',
    color: '#3498db',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  simpleText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    color: 'black',
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    backgroundColor: '#d3d3d3',
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
      color: 'black',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 20,
    },
    modalTitle: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    modalItem: {
      color: 'black',
      fontSize: 16,
      marginVertical: 10,
    },
    pressableText: {
      color: 'black',
    },
    
});

export default stylesRegister;
