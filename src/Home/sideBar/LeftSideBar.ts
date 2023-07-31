// Adicionando a estilização do componente
import styled from 'styled-components'

export const StyledLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.94rem;
  margin-left: 6.12rem;
  align-items: center;
  margin-right: 1.18rem;
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
