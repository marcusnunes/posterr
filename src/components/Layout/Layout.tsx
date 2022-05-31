import React from 'react';
import { Footer, Nav } from '@/components';
import * as S from './Layout.styles';

type TLayout = {
  children: JSX.Element;
}

export default function Layout({ children }: TLayout) {
  return (
    <S.Wrapper>
      <S.Main>
        <S.Container>
        <Nav />
        
        <S.Children>
          {children}
        </S.Children>
        
        </S.Container>
      </S.Main>

      <Footer />
    </S.Wrapper>
  );
}