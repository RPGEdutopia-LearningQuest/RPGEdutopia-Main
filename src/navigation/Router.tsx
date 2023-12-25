import {NavigationContainer} from '@react-navigation/native';
import {AppStack, AuthStack} from './NavStack';
import useAuth from '../hooks/useAuth';

const Router = () => {
  const {authData, loading} = useAuth();
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
