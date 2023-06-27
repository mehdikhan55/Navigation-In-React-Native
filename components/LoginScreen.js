import { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Alert, Pressable } from 'react-native';


export default function LoginScreen({ navigation },props) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  return (

    <ScrollView style={styles.container} keyboardDismissMode='on-drag'>



      {/* <Pressable style={styles.button} onPress={() => {
        props.setShowLogin(!props.showLogin);
        props.setShowButtons(!props.showButtons);
      }}>
        <Text style={styles.buttonText}>Home</Text>
      </Pressable> */}


      <Text style={styles.headerText}>Welcome to Little Lemon</Text>



      {loggedIn && (
        <Text style={styles.regularText}>You are logged in! </Text>
      )}



      {!loggedIn && (
        <ScrollView >

          <Text style={styles.regularText}>Login to continue </Text>

          <TextInput
            value={email}
            onChangeText={onChangeEmail}
            style={styles.input}
            keyboardType='email-address'
            placeholder='Email'
            onFocus={() => Alert.alert("First name is focussed")}
          />

          <TextInput
            value={password}
            onChangeText={onChangePassword}
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
          />

          {/* <Pressable style={styles.loginButton} onPress={() => {
            (email != '' && password != '') ? setLoggedIn(true) : setLoggedIn(false)
          }}>
            <Text style={styles.buttonText} >Login</Text>
          </Pressable> */}

          {/* for navigation */}
          <Pressable
        onPress={() => navigation.navigate('Welcome')}
        style={styles.loginButton}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
        </ScrollView>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
  },
  loginButton: {
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#EE9972',
    padding: 10,
    borderRadius: 50,
    marginTop: 5,
  }
});