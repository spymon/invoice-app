import { NewInvoiceBtn } from '../buttons/styles'
import FilterDropdownMenu from '../FilterDropdownMenu'
import { H1, P2 } from '../helpers/FontComponents/styles'
import { ItemWrapper } from '../helpers/ItemWrapper'
import { StyledInvoiceHeader, Wrapper } from './styles'

const InvoiceHeader: React.FC = () => {
  return (
    <StyledInvoiceHeader>
      <ItemWrapper>
        <H1>invoices</H1>
        <P2>
          <span>there are &nbsp;</span>7 <span>&nbsp;total&nbsp;</span>
          invoices
        </P2>
      </ItemWrapper>
      <Wrapper>
        <FilterDropdownMenu />
        <NewInvoiceBtn />
      </Wrapper>
    </StyledInvoiceHeader>
  )
}

export default InvoiceHeader
