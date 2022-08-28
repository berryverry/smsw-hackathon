import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
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

const logoutAPI = async () => {
  const { data } = Axios.post('/logout');
  return data;
};

const userAPI = async () => {
  const { data } = Axios.get('/user');
  return data;
};

const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState(null);
  const userQuery = useQuery(['user'], userAPI);
  const loginMutation = useMutation(loginAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries(['user']);
    },
  });
  const registerMutation = useMutation(registerAPI);
  const logoutMutation = useMutation(logoutAPI);

  if (userQuery.data) {
    setUser(userQuery.data);
  } else {
    setUser(null);
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        userQuery,
        loginMutation,
        registerMutation,
        logoutMutation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
