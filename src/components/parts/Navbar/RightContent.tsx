'use client';

import { useState } from 'react';

import { ArrowUpRightIcon, Bell, ChevronDown, X } from 'lucide-react';
import Link from 'next/link';

import NotificationCard from '@/components/parts/Navbar/NotificationCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';

const RightContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-center items-center gap-5">
      <DropdownMenu open={isOpen} onOpenChange={handleIsOpen}>
        <DropdownMenuTrigger>
          <Bell />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-[21rem] flex flex-col mt-3 lg:mr-[8rem]">
          <div className="flex justify-between py-3 mx-3">
            <p className="font-medium text-body-md text-primary-70">Notifications</p>
            <X onClick={handleIsOpen} className="cursor-pointer" />
          </div>

          <DropdownMenuItem>
            <NotificationCard />
          </DropdownMenuItem>

          <DropdownMenuSeparator className="mx-3" />

          <DropdownMenuItem>
            <NotificationCard />
          </DropdownMenuItem>

          <DropdownMenuSeparator className="mx-3" />

          <DropdownMenuItem>
            <NotificationCard />
          </DropdownMenuItem>

          <Link href="/notifications" className="link mt-2 mb-3 ">
            See all notifications
            <ArrowUpRightIcon className="w-4 h-4" />
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>

      <Separator orientation="vertical" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex justify-center items-center gap-3 hover:bg-transparent p-0"
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44 flex flex-col p-1 mr-8">
          <Link href="/profile">
            <DropdownMenuItem>My Profile</DropdownMenuItem>
          </Link>
          <Link href="/general">
            <DropdownMenuItem>General Settings</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator className="my-1" />
          <DropdownMenuItem
            className="bg-destructive text-destructive-foreground 
          focus:bg-destructive/80 focus:text-destructive-foreground/80"
          >
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default RightContent;
