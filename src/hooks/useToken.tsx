import { useState } from 'react';
import { AUTH_TOKEN } from '../constants';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem(AUTH_TOKEN);

    return tokenString;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: string) => {
    sessionStorage.setItem(AUTH_TOKEN, userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
