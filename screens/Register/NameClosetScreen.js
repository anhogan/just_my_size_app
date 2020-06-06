import * as React from 'react';
import * as firebase from 'firebase';

import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import { UserConsumer } from '../../contexts/UserContext';
import { NanumText } from '../../components/StyledText';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6674DE',
    paddingTop: '15%',
  },
  headerText: {
    fontFamily: 'jua',
    fontSize: 50,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '15%',
  },
  subHeaderText: {
    fontFamily: 'jua',
    fontSize: 30,
    color: '#F0895F',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  perfectText: {
    fontSize: 24,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
  },
  setupText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
  },
  inputContainer: {
    marginTop: 50,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputBar: {
    width: '50%',
    height: 40,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'white',
    color: '#6674DE',
    paddingLeft: 15,
    paddingRight: 15,
  },
  endText: {
    fontFamily: 'jua',
    fontSize: 30,
    color: 'white',
  },
  closetText: {
    fontFamily: 'jua',
    fontSize: 30,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '20%',
  },
  btn: {
    backgroundColor: '#8AE8F9',
    width: '80%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
  },
  skipBtn: {
    backgroundColor: '#6674DE',
    width: '30%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 20,
    color: '#6674DE',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  skipBtnText: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'underline',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  spacer: {
    marginTop: '10%',
  },
  progressContainer: {
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  failureMessage:{
    position: 'absolute', 
    backgroundColor: 'crimson', 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',           
    height: 60, 
    top: 35,
  },
});

export default function NameCloset({ navigation }) {
  const user = firebase.auth().currentUser;

  const [name, setName] = React.useState('');
  const [failureMessage, setFailureMessage] = React.useState(false);

  const next = () => {
    user.updateProfile({ displayName: name })
    .then(() => {
      navigation.navigate('AddFirstItem');
    })
    .catch(() => {
      setFailureMessage(true);
      setTimeout(() => {
        setFailureMessage(false);
      }, 2000);
    })
  };

  return (
    <UserConsumer>
      {context => (
        <View style={styles.container}>
          <Text style={styles.headerText}>JUST MY SIZE</Text>
          <Text style={styles.subHeaderText}>WELCOME</Text>
          <NanumText style={styles.perfectText}>The perfect fit every time</NanumText>
          <NanumText style={styles.setupText}>Let's setup your closet!</NanumText>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputBar}
              placeholder='Your first name'
              clearButtonMode='while-editing'
              selectionColor='#6674DE'
              returnKeyType='next'
              onChangeText={text => setName(text)}
              value={name} />
            <Text style={styles.endText}> ' s</Text>
          </View>
          <Text style={styles.closetText}>Closet</Text>
          <View style={styles.spacer}></View>
          <TouchableOpacity onPress={next} style={styles.btn}>
              <NanumText style={styles.btnText}>Next</NanumText>
          </TouchableOpacity>
          <View style={styles.spacer}></View>
          <TouchableOpacity onPress={() => context.toggleNewUser} style={styles.skipBtn}>
            <NanumText style={styles.skipBtnText}>Skip</NanumText>
          </TouchableOpacity>
          <View style={styles.spacer}></View>
          <View style={styles.progressContainer}>
            <FontAwesome name="circle" size={20} color="white" />
            <FontAwesome name="circle" size={20} color="#F0895F" />
            <FontAwesome name="circle" size={20} color="#F0895F" />
          </View>
          {failureMessage ? (
            <View style={styles.failureMessage}>
              <NanumText style={{color:'white'}}>Unable to name your closet - please try again</NanumText>
            </View>
          ) : null}
        </View>
      )}
    </UserConsumer>
  );
};