import {} from 'module'
import InvoiceHeader from '../InvoiceHeader'
import InvoiceList from '../InvoiceList'
import { Wrapper } from './styles'

interface IProps {
  className?: string
}

const InvoiceContainer: React.FC<IProps> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <InvoiceHeader />
      <InvoiceList />
    </Wrapper>
  )
}

export default InvoiceContainer
