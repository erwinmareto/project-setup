import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Edit3, MoreHorizontal, Trash2 } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ALL_SUBSCRIPTIONS_KEY } from '@/lib/constants/queryKeys';
import { deleteSubscription } from '@/repositories/subscriptions';

const ActionDropdown = ({ id }: { id: string }) => {
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href={`/edit/${id}/step-1`}>
          <DropdownMenuItem className="text-secondary-40 gap-2 focus:text-secondary-40">
            <Edit3 className="w-5 h-5" /> Edit
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          className="text-destructive-foreground gap-2
            focus:bg-destructive focus:text-destructive-foreground"
          onClick={handleDeleteSubscription}
        >
          <Trash2 className="w-5 h-5" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionDropdown;
