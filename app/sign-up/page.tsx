import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
};

export default SignUpPage;
