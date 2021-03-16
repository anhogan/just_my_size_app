import * as firebase from 'firebase';

import { Alert } from 'react-native';

export default function useResetPassword({ email, setSuccessEmailMessage, setFailureEmailMessage }) {
  if (email === '') {
    Alert.alert(
      'Invalid Email',
      'Please enter the email address associated with your account',
      [
        { text: 'Return to Reset Password' }
      ]
    );
  } else {
    firebase.auth().sendPasswordResetEmail(email)
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
      }, 5000);
    })
  }
}