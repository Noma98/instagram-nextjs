'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import React from 'react';

import ColorBtn from '@/components/ui/ColorBtn';

type Props = {
  providers: Record<string, ClientSafeProvider>;
};
function Signin({ providers }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <div key={id}>
          <ColorBtn
            text={`Sign In with ${name}`}
            onClick={() => signIn(id)}
            size='big'
          />
        </div>
      ))}
    </>
  );
}

export default Signin;
