import { Field, FieldProps } from 'formik'
import { FC } from 'react'
import DateView from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

interface IDatePickerProps {
  name: string
  label: string
}

const DatePicker: FC<IDatePickerProps> = ({ name, label }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {(formik: FieldProps) => {
          const { form, field } = formik
          const { setFieldValue } = form
          const { value, name } = field

          return (
            <DateView
              id={name}
              selected={value}
              onChange={val => setFieldValue(name, val)}
              name={name}
              dateFormat="dd.MM.yyyy"
            />
          )
        }}
      </Field>
    </div>
  )
}

export default DatePicker
