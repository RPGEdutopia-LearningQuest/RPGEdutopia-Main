import React, {createContext, useState, PropsWithChildren} from 'react';

export type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
};

export type AuthData = {
  token: string;
  email: string;
  name: string;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const AuthProvider = ({children}: PropsWithChildren) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  const signIn = async () => {};

  const signOut = async () => {};

  return (
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
