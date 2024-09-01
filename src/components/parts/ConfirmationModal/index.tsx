'use client';

import { ReactNode } from 'react';

import { X } from 'lucide-react';
import Image from 'next/image';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';

export interface ConfirmationModalProps {
  children: ReactNode;
  imagePath: string;
  openState: boolean;
  openHandler: () => void;
  title: string;
  description: string;
  cancleable?: boolean;
  buttonText?: string;
  clickEvent: () => void;
  closeHandler?: () => void;
}

const ConfirmationModal = ({
  imagePath,
  openState,
  openHandler,
  title,
  description,
  cancleable,
  buttonText,
  clickEvent,
  closeHandler,
  children
}: ConfirmationModalProps) => {
  return (
    <AlertDialog open={openState} onOpenChange={openHandler}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-md:max-w-[20.5rem] max-md:max-h-[19.5rem] rounded-xl p-4">
        <X onClick={closeHandler || openHandler} className="w-6 h-6 self-end cursor-pointer" />
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex justify-center items-center mb-4">
              <Image src={imagePath} width={53} height={53} alt="warning" />
            </div>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-primary-50">{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {cancleable && <AlertDialogCancel>Cancel</AlertDialogCancel>}
          <AlertDialogAction onClick={clickEvent}>{buttonText || 'Continue'}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationModal;
