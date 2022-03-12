import styled, { css } from 'styled-components/macro'

export const Content = styled.div`
  /* background: red; */
  width: 1100px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  /* padding: 3px; */
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 1em;
`

const TagInternal = styled.span`
  ${({ theme }) => css`
    font-size: 9px;
    padding: 1px 10px;
    color: ${theme.colors.gray_600};
    background: ${theme.colors.gray_200};
    border: 1.3px solid ${theme.colors.gray_600};
    border-radius: 5px;
  `}
`

export const Tag = ({ tagName }) => {
  return <TagInternal>{tagName ? tagName : 'No language'}</TagInternal>
}

export const TagNav = styled.nav`
  border: 1px solid black;
  justify-content: space-between;
  height: 45px;
  display: flex;
  flex-direction: row;
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
      transform: scale(1.03);
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

    :hover {
      transform: scale(1.03);
    }
  `}
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  p {
    font-size: 0.9rem;
    height: 115px;
  }
`

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const RepoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  overflow: hidden;
`

export const UserSection = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray_600};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 400px;
    img {
      width: 280px;
    }
  `}
`

export const ThisRepo = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray_600};
    background: ${theme.colors.white};
    /* flex-direction: column; */
    /* justify-content: space-between; */
    aligne-items: center;
    /* text-aligne: center; */
    border-radius: 20px;
    padding: 15px;
    width: 250px;
    min-height: 200px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
    :hover {
      transform: scale(1.03);
    }
  `}
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
 
  }
  svg {
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    width: 55px;
    height: 55px;

  }
`
