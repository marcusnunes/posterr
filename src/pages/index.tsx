import { useState, useEffect, useCallback } from 'react';
import type { NextPage } from 'next'
import { useRouter } from "next/router";
import Head from 'next/head'
import useSWR from "swr";
import useTranslation from 'next-translate/useTranslation';
import { Form, Layout, Modal, Tabs, Post } from '@/components';
import { fetchPosts, fetchUser } from '@/services/api';
import { TPost } from '@/types/TPosts';
import { currentDate } from '@/utils/date';
import { CURRENT_USER, FEED, FEED_OPTIONS } from '@/config/constants';
import * as S from './index.styles';

const Home: NextPage = () => {
  const { t } = useTranslation();

  const router = useRouter();
  const filter = String(router.query.id);
  const activeFilter = filter === FEED_OPTIONS.FOLLOWING
    ? FEED_OPTIONS.FOLLOWING
    : FEED_OPTIONS.ALL

  const [tabActive, setTabActive] = useState(activeFilter);
  const [posts, setPosts] = useState<any[]>([]);

  const { data: postsData, isValidating: postsLoading, error: postsError } = useSWR('/api/posts', fetchPosts);
  const { data: userData, isValidating: userLoading, error: userError } = useSWR(() => router.query.profile, fetchUser);

  const retrieveAllPosts = useCallback(() => {
    const savedPosts = localStorage.getItem('posts');

    if (!!savedPosts) {
      setPosts(JSON.parse(savedPosts));
      return;
    }

    setPosts(postsData);
  }, [postsData])

  const retrieveFollowingPosts = useCallback(() => {
    setPosts((prev) => {
      return prev.filter((item) => CURRENT_USER.following.includes(item.user.id));
    });
  }, []);

  const onTabChange = useCallback((item: string) => {
    const isFollowing = item === FEED_OPTIONS.FOLLOWING;
    const newRoute = isFollowing ? '/following' : '/';

    if (isFollowing) {
      retrieveFollowingPosts();
    } else {
      retrieveAllPosts();
    }

    setTabActive(item);

    router.push(`/?id=${item}`, newRoute, { shallow: true });
  }, [router, retrieveAllPosts, retrieveFollowingPosts]);

  const onCloseModal = useCallback(() => {
    router.push('/', undefined, { shallow: true });
  }, [router]);

  const onSubmit = useCallback((text: string) => {
    const payload = {
      id: posts[0]?.id + 1,
      text,
      createdAt: currentDate(),
      user: {
        ...CURRENT_USER
      },
    }

    localStorage.setItem('posts', JSON.stringify([payload, ...posts]));

    setPosts((prev) => [payload, ...prev]);
  }, [posts]);

  useEffect(() => {
    if (postsData) {
      retrieveAllPosts();
    }
  }, [postsData, retrieveAllPosts]);

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
          items={FEED}
          active={tabActive}
          onClick={onTabChange}
        />

        {postsLoading ? (
          <div>{t('common:loading')}</div>
        ) : posts.map((data: TPost) => (
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
