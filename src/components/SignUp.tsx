import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {supabase} from '../services/supabase';
import {AuthContext} from '../context/AuthProvider';
import {useContext} from 'react';
import {saveToStorage} from '../storage/AsyncStorageUtils';
import Colors from '../utils/colors';
import {wp} from '../utils/responsive';
import Constant from '../utils/constant';
import Assets from '../utils/assets';
import SuccessModal from './SuccesScreen';

const SignUp = ({navigation}: any) => {
  const {setUser} = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSignup = async () => {
    if (email && password) {
      try {
        const {data, error} = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        if (data.user) {
          saveToStorage('userDetails', data.user);
          setUser(data.user);
          setSuccess(true);
        } else {
          setError('Sign-up successful, but user details are missing.');
        }
      } catch (error: any) {
        setError(error.message);
      }
    }
  };
  const handleLogInpNavigation = () => {
    setTimeout(() => {
      navigation.navigate('AuthScreen');
    }, 200);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Assets.feedIcon} style={styles.feedIconWrapper} />
      <View style={styles.mainWrapper}>
        <TextInput
          style={styles.inputWrapper}
          placeholder={Constant.Email}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputWrapper}
          placeholder={Constant.Password}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <Text style={styles.errorStyle}>{error}</Text>
      <View style={styles.anAccountWapper}>
        <Text style={styles.doYouHaveAnAccountWapper}>
          {Constant.alreayHaveAnAccount}
          <Text onPress={handleLogInpNavigation} style={styles.signUpText}>
            {Constant.logIn}
          </Text>
        </Text>
      </View>
      <TouchableOpacity onPress={handleSignup} style={styles.buttonWrapper}>
        <Text style={styles.buttonTextWrapper}>{Constant.SignUp}</Text>
      </TouchableOpacity>
      <SuccessModal
        buttonLable={Constant.Okay}
        onClose={handleLogInpNavigation}
        title={Constant.ProfileCreated}
        subTitle={Constant.Successfully}
        visible={success}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'center',
  },
  mainWrapper: {
    marginTop: wp(10),
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  inputWrapper: {
    borderWidth: 1,
    paddingLeft: wp(3),
    marginTop: wp(4),
    width: wp(94),
    height: wp(14),
    alignSelf: 'center',
    borderRadius: wp(2),
    color: Colors.Black,
    borderColor: Colors.DimGray,
  },
  buttonWrapper: {
    width: wp(95),
    height: wp(13),
    marginTop: wp(25),
    borderRadius: wp(2),
    backgroundColor: Colors.Black,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonTextWrapper: {
    color: Colors.White,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  feedIconWrapper: {
    width: wp(16),
    height: wp(16),
    alignSelf: 'center',
  },
  errorStyle: {
    fontSize: 16,
    color: Colors.Red,
    marginLeft: wp(5),
    marginTop: wp(1),
  },
  anAccountWapper: {
    width: wp(90),
    position: 'absolute',
    bottom: wp(8),
    alignSelf: 'center',
  },
  doYouHaveAnAccountWapper: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.DimGray,
  },
  signUpText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.Black,
  },
});

export default SignUp;
