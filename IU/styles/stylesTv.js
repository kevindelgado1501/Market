import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  productCard: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    position: 'relative',
  },
  pressable: {
    borderRadius: 10,
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  productName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  productPrice: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginVertical: 5,
  },
  viewMoreButton: {
    marginTop: 10,
    backgroundColor: '#ff6347', // Vibrant orange-red
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  viewMoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  descriptionContainer: {
    marginTop: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default styles;
