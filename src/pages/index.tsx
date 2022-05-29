import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation';
import * as icons from '@/assets/icons';
import * as S from './index.styles';

import { Post } from '@/components';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <Head>
        <title>posterr</title>
        <meta name="description" content="posterr app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Main>
        <img src="/logo.png" width="127" height="30" alt="logo" />
        

        <div style={{ width: '500px', maxWidth: '400px' }}>
          All / Following

          <Post
            text="This is my post!"
            createdAt="2022-05-01T07:00:00"
            username="anna"
            photo="https://randomuser.me/api/portraits/women/79.jpg"
          />
          <Post
            text="First Post here!"
            createdAt="2022-05-01T07:00:00"
            username="marcus"
            photo="https://randomuser.me/api/portraits/men/27.jpg"
          />
        </div>

        
        <S.TitleDemo>Hmmm</S.TitleDemo>

        

        <S.Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          {' '}
          {t('common:powered')}
        </S.Title>

        <S.Description>
          Get started by editing{' '}
          <S.Code>pages/index.tsx</S.Code>
        </S.Description>

        <p>
          {Object.values(icons).map((Value, index) => (
            <Value key={index} width={32} height={32} color="#e73663" />
          ))}
        </p>

        <S.Grid>
          <S.Card href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </S.Card>

          <S.Card href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </S.Card>

          <S.Card href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </S.Card>

          <S.Card href="https://vercel.com/new">
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </S.Card>
        </S.Grid>
      </S.Main>

      <S.Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <S.Logo>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </S.Logo>
        </a>
      </S.Footer>
    </S.Container>
  )
}

export default Home;
