import {} from 'module'
import InvoiceHeader from '../InvoiceHeader'
import { Wrapper } from './styles'

interface Props {
  className?: string
}

const InvoiceContainer: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <InvoiceHeader />
    </Wrapper>
  )
}

export default InvoiceContainer
