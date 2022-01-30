import { Field } from 'formik'
import { FC } from 'react'
import { FormikLabel } from './styles'

interface IInputProps {
  className?: string
  label: string
  name: string
  error: boolean | undefined
  errMsg?: boolean | null
}

const Input: FC<IInputProps> = ({ className, name, label, error, errMsg }) => {
  return (
    <div>
      <FormikLabel htmlFor={name} error={error} errMsg={errMsg}>
        {label}
      </FormikLabel>
      <Field className={className} id={name} name={name} />
    </div>
  )
}

export default Input
