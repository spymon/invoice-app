import { FC } from 'react'
import Select, { IOption } from './FormComponents/Select'
import TextArea from './FormComponents/Textarea'
import DatePicker from './FormComponents/DatePicker'
import { StyledInput } from './FormComponents/styles'

type FormikControlProps = {
  name: string
  label: string
  error: boolean | undefined
  errMsg?: boolean | null
} & (
  | {
      control: 'input'
    }
  | {
      control: 'textarea'
    }
  | {
      control: 'select'
      options: IOption[]
    }
  | {
      control: 'date'
    }
)

const FormikControl: FC<FormikControlProps> = props => {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <StyledInput {...rest} />
    case 'textarea':
      return <TextArea {...rest} />
    case 'select':
      return <Select {...rest} options={props.options} />
    case 'date':
      return <DatePicker {...rest} />
    default:
      return null
  }
}

export default FormikControl
