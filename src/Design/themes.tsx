import DS from './designSystem'

interface Theme {
  designSystem: {}
  backgroundColor: string
  primaryColor: string
  secondaryColor: string
  invoiceBackgroundColor: string
  navbarBackgroundColor: string
  themeModeFillColor: string
}

const lightTheme: Theme = {
  designSystem: DS,
  backgroundColor: DS.colors.WhiteBg,
  primaryColor: DS.colors.darkerBlue,
  secondaryColor: DS.colors.fadedDarkBlue,
  invoiceBackgroundColor: DS.colors.fadedDarkBlue,
  navbarBackgroundColor: DS.colors.grayBlue,
  themeModeFillColor: DS.colors.fadedBlue,
}

const darkTheme: Theme = {
  designSystem: DS,
  backgroundColor: DS.colors.darkBlue,
  primaryColor: DS.colors.white,
  secondaryColor: DS.colors.fadedLightBlue,
  invoiceBackgroundColor: DS.colors.darkerPurple,
  navbarBackgroundColor: DS.colors.darkerPurple,
  themeModeFillColor: DS.colors.fadedGrayBlue,
}

const theme = {
  light: lightTheme,
  dark: darkTheme,
}

export default theme
