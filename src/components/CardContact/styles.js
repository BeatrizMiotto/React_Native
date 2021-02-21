import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contactInformation: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderRadius: 4,
    borderColor: '#999',
    padding: 8,
    marginBottom: 8,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginRight: 8,
  },

  titleAvatar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003',
  },

  icon: {
    marginLeft: 'auto',
    marginRight: 8,
  },
});
