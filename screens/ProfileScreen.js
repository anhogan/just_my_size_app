import * as React from 'react';
import * as firebase from 'firebase';

import { StyleSheet, TextInput, TouchableOpacity, View, Alert } from 'react-native';

import { NanumText } from '../components/StyledText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  inputEmail: {
    marginTop: '10%',
    marginBottom: '2%',
    marginRight: '52.5%',
    color: '#6674DE',
  },
  inputName: {
    marginTop: '10%',
    marginBottom: '2%',
    marginRight: '60%',
    color: '#6674DE',
  },
  inputPlan: {
    marginTop: '10%',
    marginBottom: '2%',
    marginRight: '70%',
    color: '#6674DE',
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
  },
  planType: {
    width: '80%',
    height: 40,
    borderColor: '#6674DE',
    borderWidth: 2,
    borderRadius: 5,
    color: '#6674DE',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },  
  resetBtn: {
    backgroundColor: '#F0895F',
    width: '80%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
  },
  updateBtn: {
    backgroundColor: '#6674DE',
    width: '80%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  logoutBtn: {
    backgroundColor: 'crimson',
    width: '80%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  spacer: {
    marginTop: '10%',
  },
  successMessage:{
    position: 'absolute', 
    backgroundColor: '#8AE8F9', 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',           
    height: 40, 
    top: 0,
  },
  failureMessage:{
    position: 'absolute', 
    backgroundColor: 'crimson', 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',           
    height: 40, 
    top: 0,
  },
});

export default function Profile() {
  const database = firebase.database();
  const user = firebase.auth().currentUser;
  const id = user.uid;

  const [name, setName] = React.useState(user.displayName);
  const [emailAddress, setEmailAddress] = React.useState(user.email);
  const [successMessage, setSuccessMessage] = React.useState(false);
  const [failureMessage, setFailureMessage] = React.useState(false);
  const [successEmailMessage, setSuccessEmailMessage] = React.useState(false);
  const [failureEmailMessage, setFailureEmailMessage] = React.useState(false);
  const [timeoutMessage, setTimeOutMessage] = React.useState(false);

  const resetPassword = () => {
    firebase.auth().sendPasswordResetEmail(user.email)
      .then(() => {
        setSuccessEmailMessage(true);
        setTimeout(() => {
          setSuccessEmailMessage(false);
        }, 2000);
      })
      .catch(() => {
        setFailureEmailMessage(true);
        setTimeout(() => {
          setFailureEmailMessage(false);
        }, 2000);
      })
  };

  const updateProfile = () => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailAddress !== user.email) {
      if (emailRegex.test(emailAddress)) {
        user.updateEmail(emailAddress)
          .then(() => {
            user.updateProfile({ displayName: name })
              .then(() => {
                database.ref('users/' + id).set({
                  email: emailAddress,
                  name: name,
                  newUser: false,
                  plan: 'Free',
                  uid: id
                });
                setSuccessMessage(true);
                setTimeout(() => {
                  setSuccessMessage(false);
                }, 2000);
              })
              .catch(() => {
                setFailureMessage(true);
                setTimeout(() => {
                  setFailureMessage(false);
                }, 2000);
              })
          })
          .catch(err => {
            if (err.code.includes('email-already-in-use')) {
              Alert.alert(
                'Invalid Email Address',
                'Email address already in use',
                [
                  { text: 'Return to Profile' }
                ]
              )
            } else {
              setTimeOutMessage(true);
              setTimeout(() => {
                setTimeOutMessage(false);
              }, 4000);
            };
          });
      } else {
        Alert.alert(
          'Invalid Email',
          'Please enter a valid email address',
          [
            { text: 'Return to Profile' }
          ]
        )
      };
    } else {
      user.updateProfile({
        displayName: name
      }).then(() => {
        database.ref('users/' + id).set({
          email: emailAddress,
          name: name,
          newUser: false,
          plan: 'Free',
          uid: id
        });
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 2000);
      }).catch(() => {
        setFailureMessage(true);
        setTimeout(() => {
          setFailureMessage(false);
        }, 2000);
      });
    };
  };

  const logout = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log('Successfully signed out!')
      })
      .catch(err => {
        console.log(err.code, err.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <NanumText style={styles.inputName}>FIRST NAME</NanumText>
        <TextInput
          style={styles.inputBar}
          placeholder={name ? null : 'Enter your first name'}
          autoCapitalize='none'
          clearButtonMode='while-editing'
          selectionColor='#6674DE'
          returnKeyType='done'
          onChangeText={text => setName(text)}
          value={name} />
        <NanumText style={styles.inputEmail}>EMAIL ADDRESS</NanumText>
        <TextInput
          style={styles.inputBar}
          textContentType='emailAddress'
          autoCapitalize='none'
          clearButtonMode='while-editing'
          selectionColor='#6674DE'
          returnKeyType='done'
          onChangeText={text => setEmailAddress(text)}
          value={emailAddress} />
      </View>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={resetPassword} style={styles.resetBtn}>
        <NanumText style={styles.btnText}>Change Your Password</NanumText>
      </TouchableOpacity>
      {/* Add in upgrade option via App Store or Google Play Store => send to Firebase */}
      <View style={styles.inputContainer}>
        <NanumText style={styles.inputPlan}>PLAN</NanumText>
        <NanumText style={styles.planType}>Free</NanumText>
      </View>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={updateProfile} style={styles.updateBtn}>
        <NanumText style={styles.btnText}>Update Profile</NanumText>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
        <NanumText style={styles.btnText}>Logout</NanumText>
      </TouchableOpacity>
      {successMessage ? (
        <View style={styles.successMessage}>
          <NanumText style={{color:'#6674DE'}}>Successfully updated profile!</NanumText>
        </View>
      ) : null}
      {failureMessage ? (
        <View style={styles.failureMessage}>
          <NanumText style={{color:'white'}}>Unable to update profile</NanumText>
        </View>
      ) : null}
      {successEmailMessage ? (
        <View style={styles.successMessage}>
          <NanumText style={{color:'#6674DE'}}>Password reset email sent to {user.email}!</NanumText>
        </View>
      ) : null}
      {failureEmailMessage ? (
        <View style={styles.failureMessage}>
          <NanumText style={{color:'white'}}>There was an error sending the email. Please try again</NanumText>
        </View>
      ) : null}
      {timeoutMessage ? (
        <View style={styles.failureMessage}>
          <NanumText style={{color:'white'}}>To change your email address, please logout and log back in to verify this is your account</NanumText>
        </View>
      ) : null}
    </View>
  );
}

Profile.navigationOptions = {
  header: null,
};