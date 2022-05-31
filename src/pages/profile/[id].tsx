import type { NextPage } from 'next'
import { useRouter } from "next/router";
import Head from 'next/head';
import useSWR from "swr";
import useTranslation from 'next-translate/useTranslation';
import { Layout, UserProfile } from '@/components';
import { fetchUser } from '@/services/api';

const Profile: NextPage = () => {
  const { t } = useTranslation();
  
  const router = useRouter();
  const { id } = router.query;

  const { data, isValidating: loading, error } = useSWR(id, fetchUser);

  return (
    <Layout>
      <>
        <Head>
          <title>{t('common:profile')}</title>
        </Head>
        
        {loading || !data || error ? (
          <div>{t('common:loading')}</div>
        ) : (
          <UserProfile
            key={data.id}
            username={data.username}
            photo={data.photo}
            createdAt={data.createdAt}
            posts={data.posts}
            following={data.following}
            followers={data.followers}
          />
        )}
      </>
    </Layout>
      
  );
}

export default Profile;
