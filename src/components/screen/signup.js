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

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  // const navigation = useNavigation();
  const submit = () => {
    if(email === "" || password === ""){
      alert("Email or Password cannot be empty");
    }
    else{
    navigation.navigate('Counter', {
      email: email,
      password: password
    });
  }
  };
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
        <Text style={styles.text}>CREATE AN ACCOUNT</Text>
        <Text style={styles.label1}>Email</Text>
        <TextInput
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholderTextColor="#4C3D92"
          style={styles.input}
          placeholder="name@email.com"
        />
        <Text style={styles.label2}>Set a Password</Text>
        <TextInput
          value={password}
          onChange={(e) => {
            setPasword(e.target.value);
          }}
          placeholderTextColor="#4C3D92"
          secureTextEntry={true}
          style={styles.input}
          placeholder="password"
        />
        <TouchableOpacity
          onPress={() => {
            submit();
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <Text onPress={()=> {navigation.navigate('Login')}} style={styles.text}>wait, I already have an account</Text>
      </LinearGradient>
    </View>
  );
};

const width_proportion = '100%';
const height_proportion = '100%';
let ScreenHeight = Dimensions.get('window').height;
const button_width = '70%';
const margin_right1 = '50%';
const margin_right2 = '30%';

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

// const mapStateToProps=(state)=>({ data:state.data })

// export default connect(mapStateToProps,mapDispatchToProps)(SignUp);

export default SignUp;