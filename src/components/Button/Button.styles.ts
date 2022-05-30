import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  font-family: inherit;
  font-size: .875rem;
  margin: 0;
  padding: 0.25rem 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.text.button};;
  background-color: ${({ theme }) => theme.bg.button};
  border: 1px solid transparent;
  border-radius: 15px;
  transition: color .15s ease-in-out, background-color .15s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bg.buttonHover};
  }

  &:disabled {
    pointer-events: none;
    opacity: .50;
  }
`;
