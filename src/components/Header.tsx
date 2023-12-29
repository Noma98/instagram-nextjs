'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';

import React from 'react';

import ColorBtn from '@/components/ui/ColorBtn';
import {
  HomeFillIcon,
  HomeIcon,
  NewFillIcon,
  NewIcon,
  SearchFillIcon,
  SearchIcon,
} from '@/components/ui/icons';

const menu = [
  {
    href: '/',
    icon: <HomeIcon />,
    activeIcon: <HomeFillIcon />,
  },
  {
    href: '/search',
    icon: <SearchIcon />,
    activeIcon: <SearchFillIcon />,
  },
  {
    href: '/new',
    icon: <NewIcon />,
    activeIcon: <NewFillIcon />,
  },
];

function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const onSignIn = () => {
    signIn();
  };
  const onSignOut = () => {
    if (session) {
      signOut();
    }
  };
  return (
    <header className='py-4 px-8 z-10 border-b border-gray-100 flex justify-between'>
      <button>
        <Link href='/'>
          <h1 className='text-xl font-bold'>instagram</h1>
        </Link>
      </button>
      <nav>
        <ul className='flex gap-4 items-center'>
          {menu.map(({ href, icon, activeIcon }) => (
            <li>
              <Link href={href}>{pathname === href ? activeIcon : icon}</Link>
            </li>
          ))}
          <li>
            {session ? (
              <ColorBtn onClick={onSignOut} text='Sign out' />
            ) : (
              <ColorBtn onClick={onSignIn} text='Sign in' />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
