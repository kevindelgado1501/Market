import { StyleSheet } from 'react-native';

const stylesProduct = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  productContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2, // Aumenta la opacidad para un efecto más pronunciado
    shadowOffset: { width: 0, height: 4 }, // Ajusta el desplazamiento de la sombra
    shadowRadius: 10, // Ajusta el difuminado de la sombra
    elevation: 5, // Aumenta la elevación para una mejor apariencia en Android
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
});

export default stylesProduct;
