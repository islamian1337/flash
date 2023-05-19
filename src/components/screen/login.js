import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Image,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (email === '' || password === '') {
      alert('Please enter username and password');
    } else {
      login(email, password);
    }
  };
  const login = async (email, password) => {
    try {
      const response = await fetch('https://api.memberstack.com/v2/login', {
              method: 'POST',
              headers: {
               'X-API-KEY': 'sk_sb_9ef3d1deb75d5c158e5e'
              },
              body: JSON.stringify({
               email: email,
               password: password
              })
             })
      // const response = await axios.post(
      //   'https://api.memberstack.com/v2/login',
      //   {
      //     email,
      //     password,
      //   },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       Authorization: 'sk_sb_9ef3d1deb75d5c158e5e',
      //     },
      //   },
      // );

      // Handle successful login
      console.log(response.data);
      alert('response.data', response.data);
    } catch (error) {
      // Handle login error
      console.error(error);
      alert(error);
    }
  };

  //const handleLogin = async (email, password) => {
  // try {
  //   const response = await axios.post('app.flashbible.com/login', {
  //     email: email,
  //     password: password,
  //   }, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'sk_sb_9ef3d1deb75d5c158e5e',
  //     },
  //   });

  //   console.log('Login successful:', response.data);
  //   alert('Login successful:', response.data)
  //   // Perform any additional actions upon successful login

  // } catch (error) {
  //   console.error('Login failed:', error.response.data);
  //   alert('Login failed:', error.response.data)
  //   // Handle login error
  //   // }
  //   try {
  //     const response = await fetch('app.flashbible.com/login', {
  //       method: 'POST',
  //       headers: {
  //        'X-API-KEY': 'sk_sb_9ef3d1deb75d5c158e5e'
  //       },
  //       body: JSON.stringify({
  //        email: email,
  //        password: password
  //       })
  //      })

  //     // const response = await axios.post(
  //     //   'app.flashbible.com/login',
  //     //   {
  //     //     email: email,
  //     //     password: password,
  //     //   },
  //     //   {
  //     //     headers: {
  //     //       'Content-Type': 'application/json',
  //     //       Authorization:
  //     //         'sk_sb_9ef3d1deb75d5c158e5e',
  //     //     },
  //     //   },
  //     // );
  //     console.log("Response:",response.data),
  //     //if(response.data.email == email && response.data.password == password){
  //         navigation.navigate('WebView');

  //     // Handle the response from the Memberstack API

  //   } catch (error) {
  //     // Handle any errors that occurred during the login request
  //     console.error(error);
  //     alert(error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#372C6A', '#372C6A']}
        style={styles.linearGradient}
        start={{x: 0.7, y: 0}}>
        <Image
          style={styles.icon}
          source={require('../../../assets/images/icon-2.png')}
        />
        <Text style={styles.text}>Sign in to dive into Bible Fun</Text>
        <Text style={styles.label1}>Your email address</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#4C3D92"
          style={styles.input}
          placeholder="name@email.com"
        />
        <Text style={styles.label2}>Your Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#4C3D92"
          secureTextEntry={true}
          style={styles.input}
          placeholder="Secret Password"
        />
        <TouchableOpacity
          onPress={() => {
            handleSubmit();
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <Text onPress={handleSubmit} style={styles.text}>
          uh oh, I forgot my password
        </Text>
      </LinearGradient>
    </View>
  );
};

const width_proportion = '100%';
const height_proportion = '100%';
let ScreenHeight = Dimensions.get('window').height;
const button_width = '70%';
const margin_right1 = '30%';
const margin_right2 = '35%';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width_proportion,
    height: ScreenHeight,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height_proportion,
    width: width_proportion,
  },
  image: {
    width: button_width,
    height: 35,
    flex: 0.5,
    resizeMode: 'contain',
    marginBottom: 1,
  },
  icon: {
    height: 35,
    flex: 0.5,
    resizeMode: 'contain',
  },
  input: {
    backgroundColor: '#190743',
    color: 'white',
    padding: 10,
    borderRadius: 20,
    height: 60,
    width: button_width,
    fontSize: 22,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#00E4C9',
    padding: 10,
    borderRadius: 50,
    height: 60,
    width: button_width,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 22,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  label1: {
    alignContent: 'flex-start',
    color: '#DEDEDE',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 10,
    marginRight: margin_right1,
  },
  label2: {
    alignContent: 'flex-start',
    color: '#DEDEDE',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 10,
    marginRight: margin_right2,
  },
  text: {
    color: '#8368FF',
    marginTop: 20,
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 10,
  },
});

export default Login;
