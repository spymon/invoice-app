import { Theme } from '../types/interfaces'
import DS from './designSystem'

const lightTheme: Theme = {
  designSystem: DS,
  backgroundColor: DS.colors.WhiteBg,
  invoiceBackgroundColor: DS.colors.white,
  navbarBackgroundColor: DS.colors.grayBlue,
  themeModeFillColor: DS.colors.fadedBlue,
  mainFontColor: DS.colors.darkerBlue,
  secondaryFontColor: DS.colors.fadedDarkBlue,
  filterDropdownBackgroundColor: DS.colors.white,
  filterDropdownBoxShadowColor: DS.boxShadow.light,
  filterDropdownInputBackgroundColor: DS.colors.fadedLightBlue,
  fadedBlue_fadedLightBlue: DS.colors.fadedBlue,
  fadedDarkBlue_white: DS.colors.fadedDarkBlue,
  grayBlue_fadedLightBlue: DS.colors.grayBlue,
  white_darkBlue: DS.colors.white,
  fadedLightBlue_darkPurple: DS.colors.fadedLightBlue,
  lightPurple_purple: DS.colors.lightPurple,
}

const darkTheme: Theme = {
  designSystem: DS,
  backgroundColor: DS.colors.darkBlue,
  invoiceBackgroundColor: DS.colors.darkerPurple,
  navbarBackgroundColor: DS.colors.darkerPurple,
  themeModeFillColor: DS.colors.fadedGrayBlue,
  mainFontColor: DS.colors.white,
  secondaryFontColor: DS.colors.fadedLightBlue,
  filterDropdownBackgroundColor: DS.colors.darkPurple,
  filterDropdownBoxShadowColor: DS.boxShadow.dark,
  filterDropdownInputBackgroundColor: DS.colors.darkerPurple,
  fadedBlue_fadedLightBlue: DS.colors.fadedLightBlue,
  fadedDarkBlue_white: DS.colors.white,
  grayBlue_fadedLightBlue: DS.colors.fadedLightBlue,
  white_darkBlue: DS.colors.darkBlue,
  fadedLightBlue_darkPurple: DS.colors.darkPurple,
  lightPurple_purple: DS.colors.purple,
}

const theme = {
  light: lightTheme,
  dark: darkTheme,
}

export default theme
