import { FC } from 'react'
import InvoiceStatus from '../InvoiceStatus'
import {
  InvoiceCard,
  InvoiceClientName,
  InvoiceId,
  InvoiceIdHashTag,
  InvoicePaymentDoe,
  InvoiceRightArrow,
  InvoiceTotalPrice,
} from './styles'
import arrowRightIcon from '../../assets/icon-arrow-right.svg'
import { IInvoice } from '../../types/interfaces'

interface IProps {
  invoice: IInvoice
}

const Invoice: FC<IProps> = ({ invoice }) => {
  const { id, paymentDue, clientName, total, status } = invoice

  return (
    <InvoiceCard>
      <InvoiceId>
        <InvoiceIdHashTag>#</InvoiceIdHashTag>
        {id}
      </InvoiceId>
      <InvoicePaymentDoe>
        <span>Doe</span> {paymentDue}
      </InvoicePaymentDoe>
      <InvoiceClientName>{clientName}</InvoiceClientName>
      <InvoiceTotalPrice>${total.toFixed(2)}</InvoiceTotalPrice>
      <InvoiceStatus status={status} />
      <InvoiceRightArrow src={arrowRightIcon} />
    </InvoiceCard>
  )
}

export default Invoice
