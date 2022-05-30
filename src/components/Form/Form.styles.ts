import styled from 'styled-components';

export const Wrapper = styled.div`
  textarea {
    width: 100%;
    font-size: 1em;
    padding: 0.5em;
    box-sizing: border-box;
    resize: none;
    border: 1px solid ${({ theme }) => theme.bg.input};
    border-radius: 10px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em 0;

  span {
    font-size: 0.9em;
    color: ${({ theme }) => theme.text.secondary};
  }
`;
