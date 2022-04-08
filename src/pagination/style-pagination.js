import styled, { css } from 'styled-components/macro'

export const Pag = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
  `}
`
export const PagLink = styled.li`
  ${({ theme }) => css`
    align-items: center;
    border: 1px solid #ccc;
    color: inherit;
    display: flex;
    height: 50px;
    justify-content: center;
    min-width: 50px;
    text-decoration: none;
    width: 50px;
    color: ${(props) => (props.active ? '#fff' : 'inherit')};
    background: ${(props) => (props.active ? '#333' : 'white')};
  `}
`
