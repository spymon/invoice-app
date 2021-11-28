import styled from 'styled-components'
import ThemeIcon from './index'

export const StyledThemeIcon = styled(ThemeIcon)`
  display: flex;
  margin: 32px 0;
  svg {
    cursor: pointer;

    path {
      fill: ${props => props.theme.themeModeFillColor};
      transition: ${props => props.theme.designSystem.transition};
    }
  }
  svg:hover {
    path {
      fill: ${props => props.theme.designSystem.colors.fadedLightBlue};
    }
  }

  @media (max-width: 1023px) {
    margin: 0 32px;
  }
`
