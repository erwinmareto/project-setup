export type UserContextType = {
  userId: string;
  setUserId: (userId: string) => void;
};

export type Step1ContextType = {
  icon: string;
  appName: string;
  category: string;
  setIcon: (icon: string) => void;
  setAppName: (appName: string) => void;
  setCategory: (category: string) => void;
};

export type Step2ContextType = {
  cycle: string;
  paymentStart: Date;
  paymentEnd: Date;
  price: string;
  paymentMethod: string;
  setCycle: (cycle: string) => void;
  setPaymentStart: (paymentStart: Date) => void;
  setPaymentEnd: (paymentEnd: Date) => void;
  setPrice: (price: string) => void;
  setPaymentMethod: (paymentMethod: string) => void;
};

export type Step3ContextType = {
  time: number;
  email: string;
  setTime: (time: number) => void;
  setEmail: (email: string) => void;
};
