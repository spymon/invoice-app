import { Field } from 'formik'
import { FC } from 'react'

interface ITextAreaProps {
  className?: string
  label: string
  name: string
}

const TextArea: FC<ITextAreaProps> = ({ className, name, label }) => {
  return (
    <div className={className}>
      <label className={className} htmlFor={name}>
        {label}
      </label>
      <Field className={className} as="textarea" id={name} name={name} />
    </div>
  )
}

export default TextArea
