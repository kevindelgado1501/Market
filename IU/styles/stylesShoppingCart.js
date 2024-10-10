import { StyleSheet } from 'react-native';

const stylesShoppingCart = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#dfe6f2',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    color: 'black',
    fontSize: 18,
  },
  itemPrice: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default stylesShoppingCart;