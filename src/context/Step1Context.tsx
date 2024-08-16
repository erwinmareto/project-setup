'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

import { SubscriptionCategory } from '@/components/parts/SubscriptionTable/types';

import { Step1ContextType } from './types';

const INITIAL_VALUES: Step1ContextType = {
  icon: '',
  appName: '',
  category: 'others',

  setIcon: () => {},
  setAppName: () => {},
  setCategory: () => {}
};

const Step1Context = createContext<Step1ContextType>(INITIAL_VALUES);

const Step1Provider = ({ children }: { children: ReactNode }) => {
  const [icon, setIcon] = useState('');
  const [appName, setAppName] = useState('');
  const [category, setCategory] = useState<SubscriptionCategory>('others');

  return (
    <Step1Context.Provider value={{ icon, appName, category, setIcon, setAppName, setCategory }}>
      {children}
    </Step1Context.Provider>
  );
};

export default Step1Provider;

export const useStep1Context = () => useContext(Step1Context);
