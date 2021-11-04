import styled, { css } from 'styled-components'
import NewInvoiceButton from './NewInvoiceButton'

export const button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  padding-right: 15px;
  margin: 0;
  border: none;
  border-radius: 24px;
  cursor: pointer;
`

export const NewInvoiceBtn = styled(NewInvoiceButton)`
  ${button}
  background-color: ${props => props.theme.designSystem.colors.purple};
  transition: ${props => props.theme.designSystem.transition};

  h3 {
    color: ${props => props.theme.designSystem.colors.white};
  }

  div {
    display: grid;
    place-items: center;
    min-width: 32px;
    min-height: 32px;
    background-color: ${props => props.theme.designSystem.colors.white};
    border-radius: 50%;
    margin-right: 16px;
  }

  path {
    fill: ${props => props.theme.designSystem.colors.purple};
    transition: ${props => props.theme.designSystem.transition};
  }

  &:hover {
    background-color: ${props => props.theme.designSystem.colors.lightPurple};
    path {
      fill: ${props => props.theme.designSystem.colors.lightPurple};
    }
  }
`
