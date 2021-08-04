/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';
import { ColorSchemeName } from 'react-native';
import Colors from '../constants/Colors';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';
import { 
  Octicons, 
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons } from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
        headerStyle: {
            backgroundColor: Colors.light.tint,
            shadowOpacity: 0, // ios
            elevation: 0 // android
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <Stack.Screen 
      name="Root" 
      component={MainTabNavigator} 
      options={{
        title: 'Main Root',
        headerRight:() => (
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            width: 60,
            marginRight: 10
           }}>
            <Octicons name="search" size={22} color="white"/>
            <MaterialCommunityIcons name="dots-vertical" size={22} color="white"/>
          </View>
        )
      }}/>
      
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      
      <Stack.Screen 
      name="Contacts" 
      component={ContactsScreen} 
      options={{ title: 'shtok!' }} />

      <Stack.Screen 
      name="ChatRoom" 
      component={ChatRoomScreen} 
      options={({ route }) => ({
            title: route.params.name,
            headerRight: () => {
              <View style={{
                flexDirection:'row',
                justifyContent:'space-between', 
                width: 100,
                marginRight: 10
               }}>
                <FontAwesome5 name="video" size={22} color={'white'} />
                <MaterialIcons name="call" size={22} color={'white'} />
                <MaterialCommunityIcons  name="dots-vertical" size={22} color={'white'} />
              </View>
            }
          })}
        />
    </Stack.Navigator>
  );
}
