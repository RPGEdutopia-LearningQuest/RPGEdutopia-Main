import {createStackNavigator} from '@react-navigation/stack';
import Auth from '@screens/Auth';
import Dashboard from '@screens/Dashboard';
import Signin from '@screens/Signin';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
};

export {AppStack, AuthStack};
