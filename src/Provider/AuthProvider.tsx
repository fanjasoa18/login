import React, { useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import firebase from "firebase/compat/app";
import { auth } from "../GetAuth";


type propTypes = { children?: React.ReactNode}
export const AuthProvider: React.FC <propTypes> = ({ children}) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};