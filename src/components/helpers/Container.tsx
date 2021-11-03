import styled from 'styled-components'
import { ItemWrapper } from './ItemWrapper'

export const Container = styled(ItemWrapper)`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${props => props.theme.backgroundColor};
  transition: ${props => props.theme.designSystem.transition};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
