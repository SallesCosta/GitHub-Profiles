import styled, { css } from 'styled-components/macro'

export const Content = styled.div`
  width: 1200px;
  min-height: 93vh;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 1215px) {
    width: 800px;
  }

  @media (max-width: 1030px) {
    width: 600px;
  }
`

export const Header = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray_600};
    height: 70px;
    font-size: 2rem;
    display: grid;
    place-items: center;
  `}
`

export const Grid = styled.div`
  width: 90%;
  max-width: 815px;
  margin-left: 2rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 2rem;

  @media (max-width: 1215px) {
    width: 972px;
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-template-rows: repeat(auto, 1fr);
    grid-gap: 2rem;
  }
  @media (max-width: 1030px) {
    width: 100%;
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-template-rows: repeat(auto, 1fr);
    grid-gap: 2rem;
    margin-left: 0;
    margin-top: 2rem;
  }
`

export const TagInternal = styled.span`
  ${({ theme }) => css`
    font-size: 9px;
    padding: 1px 10px;
    color: ${(props) => props.border || 'palevioletred'};
    background: ${(props) => props.bg || 'palevioletred'};
    border: 1.6px solid ${(props) => props.border || 'palevioletred'};
    border-radius: 5px;
  `}
`
export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${(props) =>
      props.primary ? `${theme.colors.ls}` : `${theme.colors.gray_600}`};
    border: 1.2px solid
      ${(props) =>
        props.primary ? `${theme.colors.ls}` : `${theme.colors.gray_600}`};
    font-size: 16px;
    padding: 5px 15px;
    border-radius: 15px;
    transition: 0.3s;
    cursor: poiter;
    :hover {
      background: ${(props) =>
        props.primary ? `${theme.colors.ls}` : `${theme.colors.orange_200}`};
      color: ${(props) =>
        props.primary ? `${theme.colors.white}` : `${theme.colors.orange_600}`};
      border: 1.2px solid
        ${(props) =>
          props.primary ? `${theme.colors.ls}` : `${theme.colors.orange_600}`};
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
    max-height: 200px;
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
    overflow: hidden;
    height: 112px;
  }
`

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1030px) {
    flex-direction: column;
  }
`

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const UserInfos = styled(VStack)`
  @media (max-width: 1030px) {
    width: 500px;
    flex-direction: row;
    justify-content: space-around;
  }
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
    min-width: 280px;
    flex-direction: column;
    justify-content: space-between;
    height: 600px;
    img {
      width: 280px;
    }
    @media (max-width: 1030px) {
      width: 100%;
      justify-content: space-between;
        height: 500px;
      img {
        margin-left: auto;
        margin-right: auto;
      }
    }
  `}
`

export const ThisRepo = styled(VStack)`
  ${({ theme }) => css`
    color: ${theme.colors.gray_600};
    background: ${theme.colors.white};
    justify-content: center;
    border-radius: 20px;
    padding: 15px;
    min-height: 200px;
    width: 250px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
    :hover {
      transform: scale(1.03);
    }
  `}
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-left: 37px;
  }
  svg {
    margin-left: auto;
    margin-right: auto;
    width: 55px;
    height: 55px;
  }
  @media (max-width: 1030px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    min-height: 50px;
    height: 80px;
    h3 { 
      margin-top: 10px;
    }
      svg {
      margin-botton: 37px;
    }
  }
`
