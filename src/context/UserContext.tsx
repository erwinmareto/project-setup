'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

import { UserContextType } from './types';

const INITIAL_VALUES = {
  userId: 'someValue',
  setUserId: () => {}
};

const UserContext = createContext<UserContextType>(INITIAL_VALUES);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState('defaultValueForUserId');
  return <UserContext.Provider value={{ userId, setUserId }}>{children}</UserContext.Provider>;
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);
