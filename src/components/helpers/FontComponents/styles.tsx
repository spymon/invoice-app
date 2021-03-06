import styled, { css } from 'styled-components'

export const headingOne = css`
  font-size: ${props => props.theme.designSystem.fonts.h1.fontSize};
  font-weight: ${props => props.theme.designSystem.fonts.h1.fontWeight};
  line-height: ${props => props.theme.designSystem.fonts.h1.lineHeight};
  letter-spacing: ${props => props.theme.designSystem.fonts.h1.letterSpacing};
  text-transform: capitalize;
  color: ${props => props.theme.mainFontColor};
  transition: ${props => props.theme.designSystem.transition};
`

export const headingTwo = css`
  font-size: ${props => props.theme.designSystem.fonts.h2.fontSize};
  font-weight: ${props => props.theme.designSystem.fonts.h2.fontWeight};
  line-height: ${props => props.theme.designSystem.fonts.h2.lineHeight};
  letter-spacing: ${props => props.theme.designSystem.fonts.h2.letterSpacing};
  text-transform: capitalize;
  color: ${props => props.theme.designSystem.colors.white};
  transition: ${props => props.theme.designSystem.transition};
`

export const headingTwo1 = css`
  font-size: ${props => props.theme.designSystem.fonts.h2_2.fontSize};
  font-weight: ${props => props.theme.designSystem.fonts.h2_2.fontWeight};
  line-height: ${props => props.theme.designSystem.fonts.h2_2.lineHeight};
  letter-spacing: ${props => props.theme.designSystem.fonts.h2_2.letterSpacing};
  text-transform: capitalize;
  color: ${props => props.theme.designSystem.colors.white};
  transition: ${props => props.theme.designSystem.transition};
`

export const headingThree1 = css`
  font-size: ${props => props.theme.designSystem.fonts.h3_1.fontSize};
  font-weight: ${props => props.theme.designSystem.fonts.h3_1.fontWeight};
  line-height: ${props => props.theme.designSystem.fonts.h3_1.lineHeight};
  letter-spacing: ${props => props.theme.designSystem.fonts.h3_1.letterSpacing};
`

export const headingThree = css`
  font-size: ${props => props.theme.designSystem.fonts.h3_2.fontSize};
  font-weight: ${props => props.theme.designSystem.fonts.h3_2.fontWeight};
  line-height: ${props => props.theme.designSystem.fonts.h3_2.lineHeight};
  letter-spacing: ${props => props.theme.designSystem.fonts.h3_2.letterSpacing};
  text-transform: capitalize;
  color: ${props => props.theme.mainFontColor};
  transition: ${props => props.theme.designSystem.transition};
`

export const paragraph = css`
  font-size: ${props => props.theme.designSystem.fonts.p1.fontSize};
  font-weight: ${props => props.theme.designSystem.fonts.p1.fontWeight};
  line-height: ${props => props.theme.designSystem.fonts.p1.lineHeight};
  letter-spacing: ${props => props.theme.designSystem.fonts.p1.letterSpacing};
  text-transform: capitalize;
  color: ${props => props.theme.secondaryFontColor};
  transition: ${props => props.theme.designSystem.transition};
`

export const H1 = styled.h1`
  ${headingOne}

  @media (max-width: 550px) {
    ${headingTwo}
    color: ${props => props.theme.mainFontColor};
  }
`

export const H3 = styled.h3`
  ${headingThree}

  @media (max-width:550px) {
    span {
      display: none;
    }
  }
`

export const P2 = styled.p`
  ${paragraph}

  @media (max-width:550px) {
    span {
      display: none;
    }
  }
`
