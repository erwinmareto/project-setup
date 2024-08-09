'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

import { Step3ContextType } from './types';

const INITIAL_VALUES = {
  time: 1,
  email: '',
  setTime: () => {},
  setEmail: () => {}
};

const Step3Context = createContext<Step3ContextType>(INITIAL_VALUES);

const Step3Provider = ({ children }: { children: ReactNode }) => {
  const [time, setTime] = useState(1);
  const [email, setEmail] = useState('');

  return (
    <Step3Context.Provider value={{ time, email, setTime, setEmail }}>
      {children}
    </Step3Context.Provider>
  );
};

export default Step3Provider;

export const useStep3Context = () => useContext(Step3Context);
