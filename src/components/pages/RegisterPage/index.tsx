import RegisterForm from '@/components/parts/Auth/RegisterForm';

const Register = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 lg:px-10 lg:py-20">
      <section>
        <article className="flex flex-col gap-9">
          <div className="flex flex-col gap-2 max-w-[32rem]">
            <h2 className="font-semibold text-primary-70 text-heading-4 md:text-heading-2">Create Your Account.</h2>
            <p className="text-primary-45 text-body-sm md:text-body-md">
              Welcome to Reminderoo. Enter your email address and password to Sign Up.
            </p>
          </div>

          <RegisterForm />
        </article>
      </section>
    </main>
  );
};

export default Register;
