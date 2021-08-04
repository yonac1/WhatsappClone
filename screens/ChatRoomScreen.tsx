import React from 'react';
import { FlatList, ImageBackground } from 'react-native';

import { useRoute } from '@react-navigation/native';

import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';
import BG from '../assets/images/BG.png';
import InputBox from '../components/InputBox';

const ChatRoomScreen = () => {

    const route = useRoute();

    console.log(route.params)

    return (
        <ImageBackground style={{width: '100%', height:'100%'}}source={BG}>
            <FlatList
                data={chatRoomData.messages}
                inverted={true}
                renderItem={({ item }) => <ChatMessage message={item} />}
            />
            <InputBox />
        </ImageBackground>
    )
}

export default ChatRoomScreen;