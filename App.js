import * as React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import LoginScreen from './components/LoginScreen';
import NavMenuItems from './components/NavMenuItems';
import WelcomeScreen from './components/WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'


//instantiate stack
// const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();

// const Drawer = createDrawerNavigator();

// function LogoTitle() {
//   return (
//     <Image source={require('./img/logo.png')} style={
//       {
//         height: 40,
//         width: 300,
//         alignSelf: 'center',
//         resizeMode: 'contain'
//       }
//     } />
//   );
// }

// export default function App() {
//   return (

    // <NavigationContainer >
    //   <View style={styles.container}>
    //     <LittleLemonHeader />
    //     <Stack.Navigator
    //       initialRouteName="Welcome"
    //       screenOptions={{
    //         headerStyle: { backgroundColor: 'yellow' },
    //         headerTintColor: "black",
    //         headerTitleStyle: {
    //           fontWeight: "bold",
    //         }
    //       }}
    //     >

    //       <Stack.Screen
    //         name="Welcome"
    //         component={WelcomeScreen}
    //         options={{ title: 'Home',headerTitle:(props)=><LogoTitle {...props}/> }}
    //       />

    //       <Stack.Screen name="Menu" component={NavMenuItems} options={{ title: 'Menu' }} />

    //     </Stack.Navigator>
    //     <LittleLemonFooter />
    //   </View>
    // </NavigationContainer>


    // Stack Navigation with Login
    // <NavigationContainer >
    //   <View style={styles.container}>
    //     <LittleLemonHeader />
    //     <Stack.Navigator
    //       initialRouteName='Login'
    //     >
    //       <Stack.Screen name="Login"
    //       component={LoginScreen}
    //       options={{title:'Login'}}
    //       />
    //       <Stack.Screen name="Welcome" component={WelcomeScreen} />

    //     </Stack.Navigator>
    //     <LittleLemonFooter />
    //   </View>
    // </NavigationContainer>


    // Tab Navigation  
        // <>
        //   <NavigationContainer>
        //     <View style={styles.container}>
        //       <LittleLemonHeader />
        //       <Tab.Navigator
        //         screenOptions={({ route }) => ({
        //           tabBarIcon: ({ size }) => {
        //             let iconName;
        //             if (route.name === 'Welcome') {
        //               iconName = 'ios-home';
        //             } else if (route.name === 'Login') {
        //               iconName = 'ios-enter';
        //             }
        //             return <Ionicons name={iconName} size={size} />;
        //           },
        //         })}
        //         initialRouteName="Login">
        //         <Tab.Screen name="Welcome" component={WelcomeScreen} />
        //         <Tab.Screen name="Login" component={LoginScreen} />
        //       </Tab.Navigator>
        //     </View>

        //     <View style={styles.footerContainer}>
        //       <LittleLemonFooter />
        //     </View>
        //   </NavigationContainer>
        // </>



export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation initialRouteName="Welcome"
          screenOptions={{ drawerPosition: "right" }}
        >
          <Drawer.Screen name="Welcome" component={WelcomeScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
};
