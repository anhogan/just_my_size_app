import * as React from 'react';
import * as firebase from 'firebase';

import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { styles } from '../../../assets/styles/NameClosetScreenStyles';
import { NanumText } from '../../StyledText';
import { FontAwesome } from '@expo/vector-icons';

export default function NameCloset({ navigation }) {
  const database = firebase.database();
  const user = firebase.auth().currentUser;

  const [name, setName] = React.useState('');
  const [failureMessage, setFailureMessage] = React.useState(false);

  const next = () => {
    user.updateProfile({ displayName: name })
    .then(() => {
      database.ref('users/' + user.uid).update({
        name: name
      });

      database.ref('users/' + user.uid + '/closet/0').update({
        name: name
      });

      navigation.navigate('AddFirstItem');
    })
    .catch(() => {
      setFailureMessage(true);
      setTimeout(() => {
        setFailureMessage(false);
      }, 2000);
    })
  };

  const skip = () => {
    database.ref('users/' + user.uid).update({
      newUser: false
    });
  };

  return (
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
      <TouchableOpacity onPress={skip} style={styles.skipBtn}>
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
          <NanumText style={{ color:'white' }}>Unable to name your closet. Please try again</NanumText>
        </View>
      ) : null}
    </View>
  );
};