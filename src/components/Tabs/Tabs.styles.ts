import styled from 'styled-components';

type TTab = {
  active: boolean;
}

export const Wrapper = styled.div`
  display: flex;
`;

export const Tab = styled.button<TTab>`
  font-size: 1em;
  padding: 0.6em 0.8em;
  cursor: pointer;
  color: ${({theme}) => theme.colors.primary};
  background: ${({theme}) => theme.bg.primary};
  border: 0;
  outline: 0;
  opacity: ${({ active }) => active ? 1 : 0.6};
  border-bottom: 2px solid ${({ active, theme }) => active
    ? theme.colors.primary
    : 'transparent'};
  text-transform: lowercase;
`;

