import React from 'react';
import * as S from './Tabs.styles';

type TTabs = {
  items: string[];
  active: string;
  onClick: (item: string) => void;
}

export default function Tabs({ items, active, onClick }: TTabs) {
  return (
    <S.Wrapper>
      {items.map(type => (
        <S.Tab
          key={type}
          active={active === type}
          onClick={() => onClick(type)}
        >
          {type}
        </S.Tab>
      ))}
    </S.Wrapper>
  );
}
