import styled, { css } from 'styled-components/macro'

const TagInternal = styled.span`
  ${({ theme }) => css`
    font-size: 9px;
    padding: 2px 10px;
    color: ${theme.colors.gray_600};
    background: ${theme.colors.gray_200};
    border: 1.3px solid ${theme.colors.gray_600};
    border-radius: 5px;
  `}
`

export const Tag = ({ tagName, percent }) => {
  return (
    <TagInternal>
      {tagName} {percent}
    </TagInternal>
  )
}

export const TagNav = styled.nav`
  border: 1px solid black;
  padding: 0.5rem;
  justify-content: space-between;
  height: 50px;
  display: flex;
  flex-direction: row;
  width: 140px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${(props) =>
      props.primary ? `${theme.colors.white}` : `${theme.colors.orange_200}`};
    color: ${(props) =>
      props.primary ? `${theme.colors.ls}` : `${theme.colors.orange_600}`};
    border: 1px solid
      ${(props) =>
        props.primary ? `${theme.colors.ls}` : `${theme.colors.orange_600}`};
    font-size: 16px;
    padding: 5px 15px;
    border-radius: 15px;
    transition: 0.3s;
    cursor: poiter;
    :hover {
      background: ${theme.colors.ls};
      color: ${theme.colors.white};
      transform: scale(1.05);
    }
  `}
`

export const Repo = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray_600};
    background: ${theme.colors.white};
    flex-direction: column;
    border-radius: 20px;
    padding: 15px;
    width: 250px;
    min-height: 200px;

    justify-content: space-between;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
  `}
`

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const VStack = styled.div`
  display: flex;
  flex-direction: column;
`
