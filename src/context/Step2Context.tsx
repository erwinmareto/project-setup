'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

import { Step2ContextType } from './types';

const INITIAL_VALUES = {
  cycle: '',
  paymentStart: new Date(),
  paymentEnd: new Date(),
  price: '',
  paymentMethod: '',
  setCycle: () => {},
  setPaymentStart: () => {},
  setPaymentEnd: () => {},
  setPrice: () => {},
  setPaymentMethod: () => {}
};

const Step2Context = createContext<Step2ContextType>(INITIAL_VALUES);

const Step2Provider = ({ children }: { children: ReactNode }) => {
  const [cycle, setCycle] = useState('');
  const [paymentStart, setPaymentStart] = useState(new Date());
  const [paymentEnd, setPaymentEnd] = useState(new Date());
  const [price, setPrice] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <Step2Context.Provider
      value={{
        cycle,
        paymentStart,
        paymentEnd,
        price,
        paymentMethod,
        setCycle,
        setPaymentStart,
        setPaymentEnd,
        setPrice,
        setPaymentMethod
      }}
    >
      {children}
    </Step2Context.Provider>
  );
};

export default Step2Provider;

export const useStep2Context = () => useContext(Step2Context);
