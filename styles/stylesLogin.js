import { StyleSheet } from 'react-native';

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    padding: 20,
    backgroundColor: '#3498db',
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10, // Espacio entre botones
  },
});

export default stylesLogin;
