import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1em 0;
  border-bottom: 1px solid ${({ theme }) => theme.bg.border};
  overflow: hidden;

  &:last-child {
    border-bottom: 0;
  }
`;

export const Date = styled.span`
  font-size: 0.9em;
  color: ${({ theme }) => theme.text.secondary};
`;

export const ActionsLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  > * {
    margin-right: 16px;
  }

  > *:last-child {
    margin-right: 0px;
  }
`;

export const ActionsRight = styled.div``;
