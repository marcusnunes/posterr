import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1em;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
`;

export const Container = styled.div`
  width: 500px;
  max-width: 500px;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

export const Children = styled.div`
  padding: 16px 0;
`;
