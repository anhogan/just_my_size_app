import * as React from 'react';
import * as firebase from 'firebase';

export default function useLogOut() {
  firebase.auth().signOut()
  .then(() => {
    console.log('Successfully signed out!')
  })
  .catch(err => {
    console.log(err.code, err.message);
  });
}