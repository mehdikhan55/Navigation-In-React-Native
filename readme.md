npx expo start
<>
      <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation initialRouteName="Welcome"
        screenOptions={{drawerPosition:"right"}}
        >
          <Drawer.Screen name="Welcome" component={WelcomeScreen}/> 
          <Drawer.Screen name="Login" component={LoginScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </>