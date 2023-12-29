import React from 'react';
import { getProviders } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Signin from '@/components/ui/Signin';

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

async function SignInPage({ searchParams: { callbackUrl } }: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }
  const providers = (await getProviders()) ?? {};

  return (
    <section className='flex justify-center'>
      {providers && (
        <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
      )}
    </section>
  );
}

export default SignInPage;
