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

const AuthScreen = ({navigation}: any) => {
  const {setUser} = useContext(AuthContext);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const {error} = await supabase.auth.signInWithPassword({email, password});
      if (error) throw error;
      const session = supabase.auth.getSession();
      session.then(({data: {session}}) => {
        saveToStorage('userDetails', session?.user);
        setUser(session?.user ?? null);
        navigation.navigate('PostFeed');
      });
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/feed.png')}
        style={styles.feedIconWrapper}
      />
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
      <TouchableOpacity onPress={handleLogin} style={styles.buttonWrapper}>
        <Text style={styles.buttonTextWrapper}>{Constant.Login}</Text>
      </TouchableOpacity>
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
});

export default AuthScreen;
