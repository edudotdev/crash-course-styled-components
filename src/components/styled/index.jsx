import styled, {keyframes} from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 2rem;
  background: paleturquoise;
`

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`