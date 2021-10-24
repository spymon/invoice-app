import styled from 'styled-components'
import { ItemWrapper } from './ItemWrapper'

export const Container = styled(ItemWrapper)`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: ${props => (props.display ? props.display : 'flex')};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'column'};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  background-color: ${props => props.theme.backgroundColor};
  transition: ${props => props.theme.designSystem.transition};
`
