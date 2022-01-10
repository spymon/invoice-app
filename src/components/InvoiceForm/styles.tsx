import styled from 'styled-components'
import { headingTwo1 } from '../helpers/FontComponents/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4984);
  z-index: 100;
`

export const InvoiceFormContainer = styled.div`
  position: absolute;
  width: 719px;
  min-height: 100%;
  padding: 56px 56px 32px 159px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${props => props.theme.white_darkBlue};
  transition: ${props => props.theme.designSystem.transition};
  z-index: 200;
`

export const InvoiceFormHeader = styled.h2`
  ${headingTwo1}
  color: ${props => props.theme.mainFontColor};
  transition: ${props => props.theme.designSystem.transition};
`
