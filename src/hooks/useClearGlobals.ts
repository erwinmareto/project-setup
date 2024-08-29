import { useRouter } from 'next/navigation';

import { useStep1Form } from '@/context/step1Global';
import { useStep2Form } from '@/context/step2Global';
import { useStep3Form } from '@/context/step3Global';

export const useClearGlobals = () => {
  const router = useRouter();
  const resetStep1Global = useStep1Form((state) => state.resetStep1Global);
  const resetStep2Global = useStep2Form((state) => state.resetStep2Global);
  const resetStep3Global = useStep3Form((state) => state.resetStep3Global);

  const clearGlobals = () => {
    router.replace('/dashboard');
    resetStep1Global();
    resetStep2Global();
    resetStep3Global();
  };

  return clearGlobals;
};
