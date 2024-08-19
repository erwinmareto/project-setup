import { createContext, ReactNode, useContext, useState } from 'react';

import { UserIdContextType } from './types';

const INITIAL_VALUES = {
  userId: '',
  setUserId: () => {}
};

const UserIdContext = createContext<UserIdContextType>(INITIAL_VALUES);

const UserIdProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState('');

  return <UserIdContext.Provider value={{ userId, setUserId }}>{children}</UserIdContext.Provider>;
};

export default UserIdProvider;

export const useUserIdContext = () => useContext(UserIdContext);
