import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Text, View } from 'react-native';
import ContactListItem from '../components/ContactListItem';
import Users from '../data/Users';

const ContactsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={true}
        style={{ width: '100%'}}
        keyExtractor={(item) => item.id}
        data={Users}
        renderItem={ ({ item }) => {
          return(
          <View>
            <ContactListItem user={item} />
          </View>
          )
        }
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default ContactsScreen;