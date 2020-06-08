import * as React from 'react';
import * as firebase from 'firebase';

import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { NanumText } from '../components/StyledText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});

export default function Closet() {
  const database = firebase.database();
  const user = firebase.auth().currentUser;

  const [closet, setCloset] = React.useState([]);

  React.useEffect(() => {
    const closetItemRef = database.ref('users/' + user.uid + '/closet');
    closetItemRef.on('value', function(snapshot) {
      setCloset(snapshot.val());
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {closet.length > 1 ? (
          <NanumText>There are closet items</NanumText>
        ) : (
          <NanumText>There are no items in your closet. Add your first one by clicking the '+' button!</NanumText>
        )}
      </ScrollView>
    </View>
  );
};

Closet.navigationOptions = {
  header: null,
};