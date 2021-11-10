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
  senderAddress: {
    street: string
    city: string
    postCode: string
    country: string
  }
  clientAddress: {
    street: string
    city: string
    postCode: string
    country: string
  }
  items: Item[]
  total: number
}

interface Item {
  name: string
  quantity: number
  price: number
  total: number
}

export interface Theme {
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
}
