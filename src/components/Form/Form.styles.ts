import styled from 'styled-components';

export const Wrapper = styled.div`
  textarea {
    width: 100%;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    font-size: 0.9em;
    color: ${({ theme }) => theme.text.secondary};
  }
`;
