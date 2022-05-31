import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.bg.border};;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text.secondary};
`;
