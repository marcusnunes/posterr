import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  min-width: 250px;
  flex-direction: column; 
`;

export const User = styled.div`
  text-align: center;
  padding: 1em;

  img {
    border-radius: 50px;
  }
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h3 {
    margin: 0;
  }

  em {
    font-style: normal;
    color: ${({theme}) => theme.text.secondary};
    padding: 0.6em 0 1em;
  }
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;

  h6 {
    font-size: 1em;
    font-weight: bold;
    margin: 0;
  }

  span {
    font-size: 1.6em;
  }
`;
