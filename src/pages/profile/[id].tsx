import type { NextPage } from 'next'
import { useRouter } from "next/router";

import Head from 'next/head';

const Profile: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <h1>Profile {id}</h1>
    </>
  );
}

export default Profile;
