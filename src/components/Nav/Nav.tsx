import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

export default function Nav() {
  return (
    <Link href="/">
      <a>
        <Image src="/logo.png" width="127" height="30" alt="logo" />
      </a>
    </Link>
  );
}
