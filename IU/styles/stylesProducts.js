
import { StyleSheet } from 'react-native';

const stylesProduct = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#dfe6f2',
  },
  productContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  viewMoreButton: {
    marginTop: 10,
    backgroundColor: '#ff6347',
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
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'left',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  productImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'right',
    alignItems: 'center',
    marginTop: 5,
  },
  productPriceOFF: {
    fontSize: 16,
    color: 'red',
    marginTop: 5,
    fontSize: 17,
    paddingRight: 10,
  },
  productPrice: {
    textDecorationLine: 'line-through',
    fontSize: 16,
    color: '#332F2C',
    marginTop: 5,
    fontSize: 14,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 20,
    marginTop: 12,
  }
});
export default stylesProduct;