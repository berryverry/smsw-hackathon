import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Axios from 'axios';
import { createContext } from 'react';

export const AuthContext = createContext();

const loginAPI = async ({ email, password }) => {
  const { data } = Axios.post('/login', {
    email,
    password,
  });
  return data;
};

const registerAPI = async ({ name, lastName, email, password }) => {
  const { data } = Axios.post('/register', {
    name,
    lastName,
    email,
    password,
  });
  return data;
};

const AuthProvider = ({ children }) => {
  const loginMutation = useMutation(loginAPI);
  const registerMutation = useMutation(registerAPI);

  return (
    <AuthContext.Provider value={{ loginMutation, registerMutation }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
