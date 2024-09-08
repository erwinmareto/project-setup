'use client';

import { ReactNode } from 'react';

import { Loader2, X } from 'lucide-react';
import Image from 'next/image';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';

export interface StatusModalProps {
  children: ReactNode;
  openState: boolean;
  openHandler: () => void;
  status: 'error' | 'idle' | 'pending' | 'success';
  description: string;
  buttonText?: string;
  clickEvent: () => void;
  closeHandler?: () => void;
}

const StatusModal = ({
  children,
  openState,
  openHandler,
  status,
  description,
  buttonText,
  clickEvent,
  closeHandler
}: StatusModalProps) => {
  return (
    <AlertDialog open={openState} onOpenChange={openHandler}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-md:max-w-[20.5rem] max-md:max-h-[19.5rem] rounded-xl p-4">
        {status === 'pending' ? (
          <Loader2 className="w-10 h-10 text-secondary-40 animate-spin" />
        ) : (
          <>
            <X onClick={closeHandler || openHandler} className="w-6 h-6 self-end cursor-pointer" />
            <AlertDialogHeader>
              <AlertDialogTitle>
                <div className="flex justify-center items-center mb-4">
                  <Image src={`/modal-icons/${status}.png`} width={53} height={53} alt="warning" />
                </div>
                {status === 'success' ? 'Success!' : 'Error!'}
              </AlertDialogTitle>
              <AlertDialogDescription className="text-primary-50">
                {status === 'success' ? description : 'Something went wrong, Please try again.'}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={clickEvent}>
                {status === 'success' ? buttonText || 'Continue' : 'Try Again'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default StatusModal;
