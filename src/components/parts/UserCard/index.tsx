import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export interface PostPlaceholderProps {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const UserCard = ({ id, postId, name, email, body }: PostPlaceholderProps) => {
  return (
    <Card className="bg-zinc-800 text-white w-[1000px]">
      {/* {data.map((user: any) => ( */}
      <>
        <CardHeader className="flex">
          <CardTitle>Card title</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>{' '}
          <div className="flex gap-4">
            <p>ID: {id}</p>
            <p>postID: {postId}</p>
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl" key={id}>
            Name: {name}
          </h2>
          <p className="text-xl">Email: {email}</p>
        </CardContent>
        <CardFooter>
          <p>{body}</p>
        </CardFooter>
      </>
      {/* ))} */}
    </Card>
  );
};

export default UserCard;
