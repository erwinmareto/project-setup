import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Edit3, Trash2 } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

import { ALL_SUBSCRIPTIONS_KEY } from '@/lib/constants/queryKeys';
import { deleteSubscription } from '@/repositories/subscriptions';

const ActionButtons = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  const deleteSubscriptionMutation = useMutation({
    mutationFn: () => deleteSubscription(id),
    onSuccess: () => {
      toast.success('Subscription deleted successfully');
      queryClient.invalidateQueries({ queryKey: [ALL_SUBSCRIPTIONS_KEY] });
    }
  });

  const handleDeleteSubscription = () => {
    deleteSubscriptionMutation.mutate();
  };

  return (
    <div className="flex gap-3 justify-center items-center">
      <Link href={`/edit/${id}/step-1`}>
        <Edit3 className="w-6 h-6 text-secondary-40" />
      </Link>
      <Trash2 className="w-6 h-6 text-destructive-foreground cursor-pointer" onClick={handleDeleteSubscription} />
    </div>
  );
};

export default ActionButtons;
