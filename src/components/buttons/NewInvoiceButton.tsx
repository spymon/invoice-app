import { H3 } from '../helpers/FontComponents/styles'

interface Props {
  className?: string
}

const NewInvoiceButton: React.FC<Props> = ({ className }) => {
  return (
    <button className={className}>
      <div>
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
            fill="#7C5DFA"
            fillRule="nonzero"
          />
        </svg>
      </div>
      <H3>
        new<span> invoice</span>
      </H3>
    </button>
  )
}

export default NewInvoiceButton
