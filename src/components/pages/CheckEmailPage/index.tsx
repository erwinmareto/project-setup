'use client';

import { useEffect, useState } from 'react';

import { ArrowLeft, Loader2, Lock } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const CheckEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const handleDelay = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log('hello');
      setIsLoading(false);
    }, 2000);
    setTimer(5);
  };

  useEffect(() => {
    if (timer) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-10 py-20">
      <section>
        <article className="flex flex-col gap-9">
          <div className="flex flex-col items-start gap-2 max-w-[32rem]">
            <div className="bg-secondary-0 p-3 rounded-full">
              <Lock className="w-7 h-7 text-secondary-40" />
            </div>
            <h3 className="font-semibold text-primary-70 text-heading-3">Check your email</h3>
            <p className="text-primary-45">
              We have sent a password reset link to{' '}
              <span className="font-semibold text-primary-70">yourmail@mail.com</span>
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 overflow-hidden">
            <Button onClick={handleDelay} disabled={!!timer}>
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  Sending...
                </div>
              ) : timer ? (
                <p>Resend available in {timer} seconds</p>
              ) : (
                'Resend email'
              )}
            </Button>
            <p className="font-medium text-primary-45 text-center">
              Didn&apos;t receive an email?{' '}
              <Link href="/register" className="text-secondary-40 hover:underline">
                Click to resend
              </Link>
            </p>
            <Link href="/login">
              <Button variant="link" type="button" className="w-full text-primary-55">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Log in
              </Button>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
};

export default CheckEmail;
