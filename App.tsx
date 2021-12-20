import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import config from './src/aws-exports';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useColorScheme from './hooks/useColorScheme';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
// import { useEffect } from 'react';
// import { getUser } from './src/graphql/queries';
// import { createUser } from './src/graphql/mutations';
// import { withAuthenticator } from 'aws-amplify-react-native';
// import Amplify, { graphqlOperation, Auth, API } from 'aws-amplify';


// Amplify.configure(config);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // useEffect( () => {
  //   const fetchUser = async () => {
  //     // get Authenticated user from Auth
  //     const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
  //     if(userInfo) {  
  //       const userData = await API.graphql(
  //         graphqlOperation(
  //           getUser, 
  //           { id: userInfo.attributes.sub }
  //         )
  //       );
  //       // it stops here
  //       console.warn("shtok");
  //       if(userData.data.getUser) 
  //       {
  //         console.warn("User is already registered in database");
  //         return;
  //       }

  //       const newUser = {
  //         id: userInfo.attributes.sub,
  //         name: userInfo.username,
  //         imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
  //         status: 'Hello!!'

  //       }

  //       await API.graphql(
  //         graphqlOperation(
  //           createUser,
  //           { input: newUser }
  //         )
  //       )
  //     }
  //   }
  //   fetchUser();
  // }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

// export default withAuthenticator(App,  {signUpConfig: {defaultCountryCode: 972}} );
