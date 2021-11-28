import styled from 'styled-components'
import {
  headingThree,
  headingThree1,
  paragraph,
} from '../../components/helpers/FontComponents/styles'

export const InvoiceCard = styled.a`
  display: grid;
  align-items: center;
  grid-template-columns: 103px 151px 1fr min-content min-content min-content;
  padding: 16px 24px;
  background-color: ${props => props.theme.invoiceBackgroundColor};
  min-width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.1);
  border: 1px solid transparent;
  transition: ${props => props.theme.designSystem.transition};
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme.designSystem.colors.purple};
  }

  @media (max-width: 810px) {
    grid-template-columns: 87px 143px 1fr min-content min-content min-content;
  }

  @media (max-width: 767px) {
    min-height: 134px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1.55fr 1.225fr 1.225fr;
    grid-template-areas:
      'top-left top-right '
      'middle-left bottom-right'
      'bottom-left bottom-right';

    & > div {
      grid-area: bottom-right;
      justify-self: end;
    }
  }
`

export const InvoiceId = styled.h3`
  ${headingThree};
  color: ${props => props.theme.mainFontColor};
  transition: ${props => props.theme.designSystem.transition};

  @media (max-width: 767px) {
    grid-area: top-left;
    align-self: start;
  }
`

export const InvoiceIdHashTag = styled.span`
  color: ${props => props.theme.designSystem.colors.fadedBlue};
`

export const InvoicePaymentDoe = styled.p`
  ${paragraph}
  color: ${props => props.theme.fadedBlue_fadedLightBlue};
  transition: ${props => props.theme.designSystem.transition};

  span {
    color: ${props => props.theme.secondaryFontColor};
    transition: ${props => props.theme.designSystem.transition};
  }

  @media (max-width: 767px) {
    grid-area: middle-left;
  }
`

export const InvoiceClientName = styled.p`
  ${paragraph};
  color: ${props => props.theme.fadedDarkBlue_white};
  transition: ${props => props.theme.designSystem.transition};

  @media (max-width: 767px) {
    grid-area: top-right;
    justify-self: end;
    align-self: start;
  }
`

export const InvoiceTotalPrice = styled.h3`
  ${headingThree1}
  color: ${props => props.theme.mainFontColor};
  margin-right: 40px;
  transition: ${props => props.theme.designSystem.transition};

  @media (max-width: 767px) {
    grid-area: bottom-left;
    margin: 0;
  }
`

export const InvoiceRightArrow = styled.img`
  margin-left: 20px;

  @media (max-width: 767px) {
    display: none;
  }
`
