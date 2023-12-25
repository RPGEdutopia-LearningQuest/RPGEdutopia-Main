import Router from '@navigation/Router';
import AuthProvider from './src/contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;