import React from 'react';
import Image from 'next/image';
import { ActionButton } from '@/components';
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
     <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        
        <Image src={photo} alt="photo" width="40" height="40" style={{ borderRadius: 30 }} />
        
        <div style={{ display: 'flex', flex: 1, marginLeft: 10 }}>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <b>@{username}</b>
            <S.Date>{createdAt}</S.Date>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ActionButton
            icon={<IconMore />}
            action={() => null}
          />
        </div>
      </div>

      <div style={{ padding: '16px 0' }}>
        {text}
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>

        <S.ActionsLeft>
          <ActionButton
            icon={<IconComment />}
            action={() => null}
          />

          <ActionButton
            icon={<IconRepeat />}
            action={() => null}
          />

          <ActionButton
            icon={<IconHeart />}
            action={() => null}
          />

          <ActionButton
            icon={<IconShare />}
            action={() => null}
          />
        </S.ActionsLeft>

        <S.ActionsRight>
          <ActionButton
            icon={<IconFlag />}
            action={() => null}
          />
        </S.ActionsRight>

      </div>
    </S.Wrapper>
  );
}
