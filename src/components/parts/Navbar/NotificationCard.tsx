import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const NotificationCard = () => {
  return (
    <article className={cn('flex p-2 gap-3 rounded-xl')}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <section>
        <p className="font-normal text-body-xs text-primary-80">
          Your subscription to <span className="font-medium">Netflix</span> has been successfully{' '}
          <span className="font-medium">active</span>
        </p>
        <p className="text-body-xs text-primary-35">10 Minutes ago</p>
      </section>
    </article>
  );
};

export default NotificationCard;
