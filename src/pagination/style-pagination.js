import styled, { css } from 'styled-components/macro'

export const Pag = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 15px;
  `}
`

export const PagLink = styled.li`
  ${({ theme }) => css`
    align-items: center;
    margin: 2px;
    border-radius: 100%;
    box-shadow: 5px 5px 5px rgba(0,0,0, 0.15);
    color: inherit;
    display: flex;
    height: 50px;
    width: 50px;
    justify-content: center;
    min-width: 50px;
    text-decoration: none;
    color: ${(props) => (props.active ? '#fff' : `${theme.colors.gray_600}`)};
    background: ${(props) => (props.active ? `${theme.colors.gray_600}` : 'white')};
  `}
`
