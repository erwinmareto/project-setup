'use client';

import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Edit3, Trash2 } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

import ConfirmationModal from '@/components/parts/Modals/ConfirmationModal';
import { ALL_SUBSCRIPTIONS_KEY } from '@/lib/constants/queryKeys';
import { deleteSubscription } from '@/repositories/subscriptions';

const ActionButtons = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const [warningOpen, setWarningOpen] = useState(false);

  const deleteSubscriptionMutation = useMutation({
    mutationFn: () => deleteSubscription(id),
    onSuccess: () => {
      toast.success('Subscription deleted successfully');
      queryClient.invalidateQueries({ queryKey: [ALL_SUBSCRIPTIONS_KEY] });
    }
  });

  const handleWarningOpen = () => {
    setWarningOpen(!warningOpen);
  };

  const handleDeleteSubscription = () => {
    deleteSubscriptionMutation.mutate();
  };

  return (
    <div className="flex gap-3 justify-center items-center">
      <Link href={`/edit/${id}/step-1`}>
        <Edit3 className="w-6 h-6 text-secondary-40" />
      </Link>
      <ConfirmationModal
        imagePath="/modal-icons/warning.png"
        openState={warningOpen}
        openHandler={handleWarningOpen}
        clickEvent={handleDeleteSubscription}
        title="Are you sure?"
        description="Once deleted, you will not be able to recover this subscription!"
        cancleable
      >
        <Trash2 className="w-6 h-6 text-destructive-foreground cursor-pointer" />
      </ConfirmationModal>
    </div>
  );
};

export default ActionButtons;
