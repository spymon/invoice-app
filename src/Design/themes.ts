import DS from './designSystem'

interface Theme {
  backgroundColor: string
  primaryColor: string
  secondaryColor: string
  invoiceBackgroundColor: string
}

const lightTheme: Theme = {
  backgroundColor: DS.colors.WhiteBg,
  primaryColor: DS.colors.darkerBlue,
  secondaryColor: DS.colors.fadedDarkBlue,
  invoiceBackgroundColor: DS.colors.fadedDarkBlue,
}

const darkTheme: Theme = {
  backgroundColor: DS.colors.darkBlue,
  primaryColor: DS.colors.white,
  secondaryColor: DS.colors.fadedLightBlue,
  invoiceBackgroundColor: DS.colors.darkerPurple,
}

const theme = {
  light: lightTheme,
  dark: darkTheme,
}

export default theme
