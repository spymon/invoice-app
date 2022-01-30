import { Status } from './types'

export interface IInvoice {
  id: string
  createdAt: string
  paymentDue: string
  description: string
  paymentTerms: number
  clientName: string
  clientEmail: string
  status: Status
  senderAddress: IAddress
  clientAddress: IAddress
  items: IItem[]
  total: number
}

export interface IAddress {
  street: string
  city: string
  postCode: string
  country: string
}

interface IItem {
  name: string
  quantity: number
  price: number
  total: number
}

export interface ITheme {
  designSystem: {}
  backgroundColor: string
  invoiceBackgroundColor: string
  navbarBackgroundColor: string
  themeModeFillColor: string
  mainFontColor: string
  secondaryFontColor: string
  filterDropdownBackgroundColor: string
  filterDropdownBoxShadowColor: string
  filterDropdownInputBackgroundColor: string
  fadedBlue_fadedLightBlue: string
  fadedDarkBlue_white: string
  grayBlue_fadedLightBlue: string
  white_darkBlue: string
  fadedLightBlue_darkPurple: string
  lightPurple_purple: string
}
