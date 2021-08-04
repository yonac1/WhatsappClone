import * as React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import ChatRooms from '../data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={true}
        style={{ width: '100%'}}
        keyExtractor={(item) => item.id}
        data={ChatRooms}
        renderItem={ ({ item }) => {
          return(
          <View>
            <ChatListItem chatRoom={item} />
          </View>
          )
        }
      }
      />
      <NewMessageButton />
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


export default ChatScreen;