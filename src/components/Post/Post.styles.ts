import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1em 0;
  border-bottom: 1px solid ${({ theme }) => theme.bg.border};
  overflow: hidden;

  &:last-child {
    border-bottom: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    border-radius: 30px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex: 1;
  margin-left: 0.8em;

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 0.9em;
    color: ${({ theme }) => theme.text.secondary};
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;
`;

export const Description = styled.div`
  padding: 1em 0;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ActionsLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  > * {
    margin-right: 1em;
  }

  > *:last-child {
    margin-right: 0;
  }
`;

export const ActionsRight = styled.div``;
