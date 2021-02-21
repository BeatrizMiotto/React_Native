import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#888',
    fontSize: 18,
  },

  titleCadastro: {
    color: '#777',
    marginTop: 10,
    marginLeft: 150,
  },

  text: {
    fontSize: 25,
    color: '#60d10a',
    margin: 30,
    fontWeight: 'bold',
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    margin:30
  },

  input: {
    marginTop: 30,
    padding: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#83f52c',
    fontSize: 15,
    borderRadius: 10,
    color: '#000',
  },

  button: {
    width: 300,
    height: 50,
    backgroundColor: '#83f52c',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 30,
  },

  textButton: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
