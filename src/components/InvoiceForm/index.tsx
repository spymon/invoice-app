import { Form, Formik } from 'formik'
import { FC } from 'react'
import FormikControl from '../helpers/FormikControl'
import * as Yup from 'yup'
import {
  FormSection,
  FormSectionTitle,
  FormWrapper,
  InvoiceFormContainer,
  InvoiceFormHeader,
  Overlay,
} from './styles'
import { IAddress } from '../../types/interfaces'

/* interface IformikValues {
  paymentDue: Date
  description: string
  paymentTerms: number
  clientName: string
  clientEmail: string
  status: string
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
  items: [
    {
      name: string
      quantity: number
      price: number
      total: number
    }
  ]
  total: number
} */

interface IInvoice {
  senderAddress: IAddress
  clientAddress: IAddress
  clientName: string
  clientEmail: string
}

const initialValues: IInvoice = {
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientName: '',
  clientEmail: '',
}

const validationSchema = Yup.object({
  senderAddress: Yup.object({
    street: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    postCode: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
  }),
  clientAddress: Yup.object({
    street: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    postCode: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
  }),
  clientName: Yup.string().required('Required'),
  clientEmail: Yup.string().email().required('Required'),
})

const InvoiceForm: FC = () => {
  const onSubmit = (values: any) => {
    console.log(values)
  }
  return (
    <>
      <Overlay />
      <InvoiceFormContainer>
        <InvoiceFormHeader>New Invoice</InvoiceFormHeader>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {formik => {
            return (
              <Form>
                <FormSection>
                  <FormSectionTitle>bill from</FormSectionTitle>
                  <FormikControl
                    control="input"
                    name="senderAddress.street"
                    label="street address"
                    errMsg
                    error={
                      formik.touched.senderAddress?.street &&
                      !!formik.errors.senderAddress?.street
                    }
                  />
                  <FormWrapper>
                    <FormikControl
                      control="input"
                      name="senderAddress.city"
                      label="city"
                      error={
                        formik.touched.senderAddress?.city &&
                        !!formik.errors.senderAddress?.city
                      }
                    />
                    <FormikControl
                      control="input"
                      name="senderAddress.postCode"
                      label="post code"
                      error={
                        formik.touched.senderAddress?.postCode &&
                        !!formik.errors.senderAddress?.postCode
                      }
                    />
                    <FormikControl
                      control="input"
                      name="senderAddress.country"
                      label="country"
                      error={
                        formik.touched.senderAddress?.country &&
                        !!formik.errors.senderAddress?.country
                      }
                    />
                  </FormWrapper>
                </FormSection>

                <FormSection>
                  <FormSectionTitle>bill to</FormSectionTitle>
                  <FormikControl
                    control="input"
                    name="clientName"
                    label="client's name"
                    errMsg
                    error={
                      formik.touched.clientName && !!formik.errors.clientName
                    }
                  />
                  <FormikControl
                    control="input"
                    name="clientEmail"
                    label="client's email"
                    errMsg
                    error={
                      formik.touched.clientEmail && !!formik.errors.clientEmail
                    }
                  />
                  <FormikControl
                    control="input"
                    name="clientAddress.street"
                    label="street address"
                    errMsg
                    error={
                      formik.touched.clientAddress?.street &&
                      !!formik.errors.clientAddress?.street
                    }
                  />
                  <FormWrapper>
                    <FormikControl
                      control="input"
                      name="clientAddress.city"
                      label="city"
                      error={
                        formik.touched.clientAddress?.city &&
                        !!formik.errors.clientAddress?.city
                      }
                    />
                    <FormikControl
                      control="input"
                      name="clientAddress.postCode"
                      label="post code"
                      error={
                        formik.touched.clientAddress?.postCode &&
                        !!formik.errors.clientAddress?.postCode
                      }
                    />
                    <FormikControl
                      control="input"
                      name="clientAddress.country"
                      label="country"
                      error={
                        formik.touched.clientAddress?.country &&
                        !!formik.errors.clientAddress?.country
                      }
                    />
                  </FormWrapper>
                </FormSection>

                <button type="submit">Submit</button>
              </Form>
            )
          }}
        </Formik>
      </InvoiceFormContainer>
    </>
  )
}

export default InvoiceForm
