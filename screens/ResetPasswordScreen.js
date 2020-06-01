import * as React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  inputBar: {
    width: '80%',
    height: 40,
    borderColor: '#6674DE',
    borderWidth: 2,
    borderRadius: 5,
    color: '#6674DE',
    paddingLeft: 15,
    paddingRight: 15,
  }
});

Search.navigationOptions = {
  header: null
};

export default function ResetPassword() {
  const [newPassword, setNewPassword] = React.useState('');
  const [passwordMatch, setPasswordMatch] = React.useState('');

  const resetPassword = () => {
    console.log('Successfully reset password');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBar}
            placeholder='Search the closet'
            clearButtonMode='while-editing'
            returnKeyType='search'
            selectionColor='#6674DE'
            onChangeText={text => setSearchTerm(text)}
            value={searchTerm}
            onSubmitEditing={() => searchCloset(searchTerm)} />
        </View>
      </ScrollView>
    </View>
  );
};