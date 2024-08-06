import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  return (
    <>
      <aside className="flex flex-col gap-2 lg:col-span-3">
        <Button variant="secondary" className="justify-start">
          My Profile
        </Button>
        <Button variant="ghost" className="justify-start text-primary-50">
          Password
        </Button>
        <Button variant="ghost" className="justify-start text-primary-50">
          Notifications
        </Button>
        <Button variant="ghost" className="justify-start text-primary-50">
          General
        </Button>
      </aside>
      <main className="bg-orange-400 lg:col-span-9">
        <h1 className="font-semibold text-primary-80 text-heading-6">Profile</h1>
      </main>
    </>
  );
}
