import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {User, Session} from '@supabase/supabase-js';
import {supabase} from '../services/supabase';

interface AuthContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  signOut: () => {},
});

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    session.then(({data: {session}}) => setUser(session?.user ?? null));

    const {data: listener} = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => listener?.subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, setUser, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
