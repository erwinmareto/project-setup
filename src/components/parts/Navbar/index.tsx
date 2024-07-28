import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
const Navbar = () => {
  return (
    <header className="container bg-blue-200 mb-3">
      <nav className="py-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
};

export default Navbar;
