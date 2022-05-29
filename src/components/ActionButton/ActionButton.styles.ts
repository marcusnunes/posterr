import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 5px;
  color: ${({ theme }) => theme.text.secondary};
  outline: 0;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    text-decoration: none;
    background-color: ${({ theme }) => theme.bg.border};
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.text.secondary};
  }
  
  span {
    margin-left: 4px;
  }
`;
