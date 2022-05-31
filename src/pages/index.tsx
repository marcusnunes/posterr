import { useState, useCallback, useEffect } from 'react';
import type { NextPage } from 'next'
import { useRouter } from "next/router";
import Head from 'next/head'
import useSWR from "swr";
import useTranslation from 'next-translate/useTranslation';
import { Form, Footer, Modal, Nav, Tabs, Post, UserProfile } from '@/components';
import { fetchPosts, fetchUser } from '@/services/api';
import { TPost } from '@/types/TPosts';
import * as S from './index.styles';

const types = ['all', 'following'];

const Home: NextPage = () => {
  const router = useRouter();

  const { t } = useTranslation();

  const [tabActive, setTabActive] = useState(types[0]);

  const { data: postsData, isValidating: postsLoading } = useSWR('/api/posts', fetchPosts);
  const { data: userData, isValidating: userLoading } = useSWR(() => router.query.profile, fetchUser);

  const onTabChange = useCallback((item: string) => {
    setTabActive(item);
  }, []);

  const onCloseModal = useCallback(() => {
    router.push('/', undefined, { shallow: true });
  }, []);

  const submit = useCallback((text: string) => console.log(text), []);

  return (
    <S.Container>
      <Head>
        <title>{t('common:title')}</title>
        <meta name="description" content={t('common:title')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Main>
        <Nav />

        <div style={{ maxWidth: '500px' }}>
          <div style={{ padding: '20px 0' }}>
            <Form action={submit} />
          </div>

          <Tabs
            items={types}
            active={tabActive}
            onClick={onTabChange}
          />

          {postsLoading ? (
            <div>{t('common:loading')}</div>
          ) : postsData?.map((data: TPost) => (
            <Post
              key={data.id}
              text={data.text}
              createdAt={data.createdAt}
              username={data.user.username}
              photo={data.user.photo}
            />
          ))}
        </div>

        <Modal
          data={userData}
          loading={userLoading}
          isOpen={!!router.query.profile}
          onClose={onCloseModal}
        />
      </S.Main>
      <Footer />
    </S.Container>
  )
}

export default Home;
