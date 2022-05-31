import { useState, useCallback } from 'react';
import type { NextPage } from 'next'
import { useRouter } from "next/router";
import Head from 'next/head'
import useSWR from "swr";
import useTranslation from 'next-translate/useTranslation';
import { Form, Layout, Modal, Tabs, Post } from '@/components';
import { fetchPosts, fetchUser } from '@/services/api';
import { TPost } from '@/types/TPosts';
import { FEED_OPTIONS } from '@/config/constants';
import * as S from './index.styles';

const Home: NextPage = () => {
  const { t } = useTranslation();

  const router = useRouter();

  const [tabActive, setTabActive] = useState(FEED_OPTIONS[0]);

  const { data: postsData, isValidating: postsLoading } = useSWR('/api/posts', fetchPosts);
  const { data: userData, isValidating: userLoading } = useSWR(() => router.query.profile, fetchUser);

  const onTabChange = useCallback((item: string) => {
    setTabActive(item);
  }, []);

  const onCloseModal = useCallback(() => {
    router.push('/', undefined, { shallow: true });
  }, []);

  const onSubmit = useCallback((text: string) => console.log(text), []);

  return (
    <Layout>
      <>
        <Head>
          <title>{t('common:title')}</title>
          <meta name="description" content={t('common:title')} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <S.FormContainer>
          <Form action={onSubmit} />
        </S.FormContainer>

        <Tabs
          items={FEED_OPTIONS}
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
        
        <Modal
          data={userData}
          loading={userLoading}
          isOpen={!!router.query.profile}
          onClose={onCloseModal}
        />
      </>
    </Layout>
  )
}

export default Home;
