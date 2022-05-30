import React from "react";
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import * as S from './UserProfile.styles';
import { Button } from '@/components';
import { formatDate } from '@/utils/date';

type TUserProfile = {
  username: string;
  photo: string;
  createdAt: string;
  posts: number;
  following: number;
  followers: number;
};

export default function UserProfile({
  username,
  photo,
  createdAt,
  posts,
  following,
  followers,
}: TUserProfile) {
  const { t } = useTranslation();

  const joined = formatDate(createdAt, 'MMMM DD, YYYY');

  return (
    <S.Wrapper>
      <S.Card>
        <S.User>
          <Image src={photo} alt="photo" width="100" height="100" />
        </S.User>

        <S.Bio>
          <h3>@{username}</h3>
          <em>{t('common:joined-on', { date: joined })}</em>

          <Button text={t('common:follow')} onClick={() => null} />

          <S.Stats>
            <div>
              <h6>{t('common:posts')}</h6>
              <span>{posts}</span>
            </div>

            <div>
              <h6>{t('common:following')}</h6>
              <span>{following}</span>
            </div>

            <div>
              <h6>{t('common:followers')}</h6>
              <span>{followers}</span>
            </div>
          </S.Stats>
        </S.Bio>
      </S.Card>
    </S.Wrapper>
  );
}
