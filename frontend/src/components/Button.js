import styled from 'styled-components';

export default styled.button`
  padding: 0 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  border: none;
  background: ${(({ theme }) => theme.colors.primary.main)};
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  transition: background 0.2s ease-in;

  &:hover{
    background: ${(({ theme }) => theme.colors.primary.light)};
  }

  &:active{
    background: ${(({ theme }) => theme.colors.primary.dark)};
  }

  &[disabled]{
    background: #ccc;
    cursor: default;
  }
`;
