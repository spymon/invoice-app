import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  padding: 72px;

  @media (max-width: 768px) {
    padding: 56px 48px;
  }

  @media (max-width: 375px) {
    padding: 32px 24px;
  }
`
