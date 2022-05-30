import { useCallback } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import * as S from './index.styles';

import mockUsers from './api/users/mockUsers.json';

import { Form, Post, UserProfile } from '@/components';

const Home: NextPage = () => {
  const { t } = useTranslation();

  const submit = useCallback((text: string) => console.log(text), []);

  return (
    <S.Container>
      <Head>
        <title>posterr</title>
        <meta name="description" content="posterr app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Main>
        <Link href="/">
          <a>
            <img src="/logo.png" width="127" height="30" alt="logo" />
          </a>
        </Link>

        
        <div style={{ width: '500px', maxWidth: '500px' }}>
          
          <UserProfile
            key={mockUsers[0].id}
            username={mockUsers[0].username}
            photo={mockUsers[0].photo}
            createdAt={mockUsers[0].createdAt}
            posts={mockUsers[0].posts}
            following={mockUsers[0].following}
            followers={mockUsers[0].followers}
          />
        
          <div style={{ padding: '20px 0' }}>
            <Form action={submit} />
          </div>



          All / Following

          <Post
            text="This is my post!"
            createdAt="2022-05-29T07:00:00"
            username="anna"
            photo="https://randomuser.me/api/portraits/women/79.jpg"
          />
          <Post
            text="First Post here!"
            createdAt="2022-05-25T07:00:00"
            username="marcus"
            photo="https://randomuser.me/api/portraits/men/27.jpg"
          />
        </div>

      </S.Main>

      <S.Footer>
        &copy;{' '} 2022 - posterr
      </S.Footer>
    </S.Container>
  )
}

export default Home;
