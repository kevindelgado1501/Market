import { StyleSheet } from 'react-native';

const stylesSupport = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#dfe6f2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  },
  faqContainer: {
    marginBottom: 20,
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  faqAnswer: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
    paddingLeft: 10,
  },
  contactContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  contactButtonText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  troubleshootingContainer: {
    marginBottom: 20,
  },
  troubleshootingTip: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
  },
});

export default stylesSupport;