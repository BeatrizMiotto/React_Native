import { StyleSheet } from 'react-native';

const cor = '#83f52c';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 8,
  },

  button: {
    backgroundColor: cor,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 300,
    height: 50,
    borderRadius: 8,
  },

  titleButton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 350,
    height: 350,
    borderRadius:20
  },
});
