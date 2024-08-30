import LoginForm from '@/components/parts/Auth/LoginForm';

const Login = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 lg:px-[6rem] lg:py-[13rem]">
      <section>
        <article className="flex flex-col gap-9">
          <div className="flex flex-col gap-2 lg:max-w-[32rem]">
            <h2 className="font-semibold text-primary-70 text-heading-4 md:text-heading-2">Sign in to your Account.</h2>
            <p className="text-primary-45 text-body-sm md:text-body-md">
              Welcome to Reminderoo. Enter your email address and password to login.
            </p>
          </div>

          <LoginForm />
        </article>
      </section>
    </main>
  );
};

export default Login;
