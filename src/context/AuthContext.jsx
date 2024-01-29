import { StyleSheet, Text, View } from "react-native";
import { createContext, useContext, useState } from "react";
import axios from "axios";

// Accessible depuis n'importe quel fichier
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    isAuthenticated: false,
  });

  const signIn = async (email, password) => {
    try {
      const response = await axios.post();

      setAuthState({
        token: response.data.token,
        isAuthenticated: true,
      });
    } catch (ex) {
      return { error: true, msg: ex.response.data.msg };
    }
  };

  return <AuthContext.Provider value={signIn}>{children}</AuthContext.Provider>;
};

const styles = StyleSheet.create({});
