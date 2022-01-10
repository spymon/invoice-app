import { Field, Formik } from 'formik'
import { FC } from 'react'
import { InvoiceFormContainer, InvoiceFormHeader, Overlay } from './styles'

interface IInvoice {
  invoice: string
}

const initialValues: IInvoice = {
  invoice: '',
}

const InvoiceForm: FC = () => {
  const onSubmit = (values: any) => {
    console.log(values)
  }
  return (
    <>
      <Overlay />
      <InvoiceFormContainer>
        <InvoiceFormHeader>New Invoice</InvoiceFormHeader>
      </InvoiceFormContainer>
    </>
  )
}

export default InvoiceForm
