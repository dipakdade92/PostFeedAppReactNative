import React, {useEffect} from 'react';
import {AuthProvider} from './src/context/AuthProvider';
import AppNavigator from './src/navigation/AppNavigator';
import {Linking} from 'react-native';
import {navigate} from './src/utils/navigationRef';

export default function App() {
  useEffect(() => {
    const handleLink = async (url: string | null) => {
      if (!url) return;
      const params = new URL(url).hash.substring(1);
      const queryParams = new URLSearchParams(params);

      const accessToken = queryParams.get('access_token');

      if (accessToken != null) {
        navigate('PostFeed');
      }
    };

    const listener = Linking.addEventListener('url', ({url}) =>
      handleLink(url),
    );

    Linking.getInitialURL().then(url => handleLink(url));

    return () => listener.remove();
  }, []);

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
