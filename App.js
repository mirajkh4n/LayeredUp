import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/screens/Login';
import AuthStack from './src/navigation/authStack';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <AuthStack />;
};

export default App;
