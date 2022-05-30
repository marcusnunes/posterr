import React from 'react';
import Image from 'next/image';
import { ActionButton } from '@/components';
import { fromNow } from '@/utils/date';
import {
  IconMore,
  IconComment,
  IconRepeat,
  IconHeart,
  IconShare,
  IconFlag,
} from '@/assets/icons';
import * as S from './Post.styles';

type TPost = {
  text: string;
  createdAt: string;
  username: string;
  photo: string;
}

export default function Post({ text, createdAt, username, photo }: TPost) {
  return (
    <S.Wrapper>
     <S.Container>
        <Image src={photo} alt="photo" width="40" height="40" />
        
        <S.UserInfo>
          <div>
            <strong>@{username}</strong>
            <span>{fromNow(createdAt)}</span>
          </div>
        </S.UserInfo>

        <S.UserActions>
          <ActionButton icon={<IconMore />} action={() => null} />
        </S.UserActions>
      </S.Container>

      <S.Description>
        {text}
      </S.Description>

      <S.Footer>
        <S.ActionsLeft>
          <ActionButton icon={<IconComment />} action={() => null} />
          <ActionButton icon={<IconRepeat />} action={() => null} />
          <ActionButton icon={<IconHeart />} action={() => null} />
          <ActionButton icon={<IconShare />} action={() => null} />
        </S.ActionsLeft>

        <S.ActionsRight>
          <ActionButton icon={<IconFlag />} action={() => null} />
        </S.ActionsRight>
      </S.Footer>
    </S.Wrapper>
  );
}
