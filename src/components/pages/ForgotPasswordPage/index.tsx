import { Lock } from 'lucide-react';

import ForgotPasswordForm from '@/components/parts/Auth/ForgotPassword';

const ForgotPassword = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 py-20 lg:px-10">
      <section>
        <article className="flex flex-col gap-9">
          <div className="flex flex-col items-start gap-2 max-w-[32rem]">
            <div className="bg-secondary-0 p-3 rounded-full">
              <Lock className="w-7 h-7 text-secondary-40" />
            </div>
            <h3 className="font-semibold text-primary-70 text-heading-4 md:text-heading-3">Forgot Your Password?</h3>
            <p className="text-primary-45 text-body-sm md:text-body-md">
              Enter your email and we&apos;ll send you a link to reset your password.
            </p>
          </div>

          <ForgotPasswordForm />
        </article>
      </section>
    </main>
  );
};

export default ForgotPassword;
