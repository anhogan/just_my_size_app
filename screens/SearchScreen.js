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
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  inputBar: {
    width: '80%',
    height: 40,
    borderColor: '#6674DE',
    borderWidth: 1,
    borderRadius: 5,
    color: '#6674DE',
    paddingLeft: 15,
    paddingRight: 15
  }
});

SearchScreen.navigationOptions = {
  header: 'SEARCH CLOSET',
};

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const searchCloset = (input) => {
    // Search through user's closet to find the item by store, style, type, or size
    console.log(`Searched closet for ${input}`);
    setSearchTerm('');
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
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