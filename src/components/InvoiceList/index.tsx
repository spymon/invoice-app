import { FC, useEffect, useState } from 'react'
import Invoice from '../Invoice'
import { InvoiceListContainer } from './styles'
import { IInvoice } from '../../types/interfaces'
import data from './../../data/data.json'

const InvoiceList: FC = () => {
  const [invoicesList, setinvoicesList] = useState<IInvoice[]>([])

  const castInvoiceToIInvoiceModel = (data: any): IInvoice[] => {
    const invoices = data.map(({ ...all }) => ({ ...all } as IInvoice))

    return invoices
  }

  useEffect(() => {
    setinvoicesList(castInvoiceToIInvoiceModel(data))
  }, [])

  return (
    <InvoiceListContainer>
      {invoicesList.map(invoice => (
        <Invoice key={invoice.id} invoice={invoice} />
      ))}
    </InvoiceListContainer>
  )
}

export default InvoiceList
