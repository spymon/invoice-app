import { Field } from 'formik'
import { FC } from 'react'

export interface IOption {
  value: string
  key: string
}

interface ISelectProps {
  name: string
  label: string
  options: IOption[]
}

const Select: FC<ISelectProps> = ({ name, label, options }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} as="select" id={name}>
        {options.map(({ value, key }) => (
          <option key={value} value={value}>
            {key}
          </option>
        ))}
      </Field>
    </div>
  )
}

export default Select
