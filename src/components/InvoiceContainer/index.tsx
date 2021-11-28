import {} from 'module'
import InvoiceHeader from '../InvoiceHeader'
import InvoiceList from '../InvoiceList'
import { Wrapper } from './styles'

interface Props {
  className?: string
}

const InvoiceContainer: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <InvoiceHeader />
      <InvoiceList />
    </Wrapper>
  )
}

export default InvoiceContainer
