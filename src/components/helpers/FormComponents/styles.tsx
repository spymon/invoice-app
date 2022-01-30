import styled, { css } from 'styled-components'
import { headingThree, paragraph } from '../FontComponents/styles'
import Input from './Input'

interface ILabelProp {
  error: boolean | undefined
  errMsg?: boolean | null
}

export const FormikLabel = styled.label<ILabelProp>`
  ${paragraph}
  position: relative;
  display: block;
  color: ${props => props.theme.fadedBlue_fadedLightBlue};
  margin-bottom: 10px;

  ${({ errMsg }) =>
    errMsg &&
    css`
      &:after {
        position: absolute;
        right: 0;
        content: "can't be empty";
        color: ${props => props.theme.designSystem.colors.danger};
        opacity: 0;
        transition: ${props => props.theme.designSystem.transition};
        text-transform: none;
      }
    `}

  ${({ error }) =>
    typeof error != undefined &&
    error &&
    css`
      color: ${props => props.theme.designSystem.colors.danger};

      &:after {
        opacity: 1;
      }
    `}
`

export const StyledInput = styled(Input)`
  ${headingThree}
  text-transform: none;
  width: 100%;
  color: ${props => props.theme.mainFontColor};
  background-color: ${props => props.theme.invoiceBackgroundColor};
  caret-color: ${props => props.theme.designSystem.colors.purple};
  cursor: pointer;
  outline: none;
  border: 1px solid ${props => props.theme.fadedLightBlue_darkPurple};
  border-radius: 4px;
  padding: 16px 20px;
  margin-bottom: 24px;

  &:hover,
  &:focus {
    border-color: ${props => props.theme.lightPurple_purple};
  }

  ${({ error }) =>
    typeof error != undefined &&
    error &&
    css`
      border-color: ${props => props.theme.designSystem.colors.danger};
    `};
`
