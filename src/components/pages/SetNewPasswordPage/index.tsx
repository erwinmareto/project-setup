import { Lock } from 'lucide-react';

import SetNewPasswordForm from '@/components/parts/Auth/SetNewPassword';

const SetNewPassword = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 py-20 lg:px-10">
      <section>
        <article className="flex flex-col gap-9">
          <div className="flex flex-col items-start gap-2 max-w-[32rem]">
            <div className="bg-secondary-0 p-3 rounded-full">
              <Lock className="w-7 h-7 text-secondary-40" />
            </div>
            <h3 className="font-semibold text-primary-70 text-heading-4 lg:text-heading-3">Set New Password</h3>
            <div>
              <p className="text-primary-45 text-body-sm md:text-body-md">Your password has been reset!</p>
              <p className="text-primary-45 text-body-sm md:text-body-md">
                Create a new one below to complete the process
              </p>
            </div>
          </div>

          <SetNewPasswordForm />
        </article>
      </section>
    </main>
  );
};

export default SetNewPassword;
