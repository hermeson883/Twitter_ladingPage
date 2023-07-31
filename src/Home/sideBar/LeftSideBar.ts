// Adicionando a estilização do componente
import styled from 'styled-components'

export const StyledLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6.12rem;
  padding-right: 1.18rem;

  border-right: 1px solid ${(props) => props.theme.Dark7};
`

export const StyledProfile = styled(StyledLeftDiv)`
  justify-content: flex-end;
  height: 15%;
`

export const StyledA = styled.a`
  color: ${(props) => props.theme.Black};
  font-size: 1.18rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 15px 0 15px;
`

export const StyledButtonTweet = styled.a`
  background: ${(props) => props.theme['Primary-Blue']};
  border-radius: 99999px;
  padding: 15px 83px;
  color: ${(props) => props.theme.White};
  font-size: 0.93rem;
  font-weight: 700;
  transition: 0.5ms;
  &:hover {
    background: ${(props) => props.theme['Dark-Primary-Blue']};
  }
`

export const StyledP = styled.p`
  font-size: 1rem;
  font-weight: 700;
`

export const StyledUserP = styled(StyledP)`
  font-weight: 400;
  color: ${(props) => props.theme.Dark5};
`
