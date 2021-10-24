import { useState } from 'react'
import { NewInvoiceBtn } from '../buttons/styles'
import FilterByStatus from '../FilterByStatus'
import { H1, P2 } from '../helpers/FontComponents/styles'
import { ItemWrapper } from '../helpers/ItemWrapper'
import { StyledInvoiceHeader, Wrapper } from './styles'

interface Props {
  className?: string
}

const InvoiceHeader: React.FC<Props> = ({ className }) => {
  const [isStatusFilterOpen, setIsStatusFilterOpen] = useState(false)

  const filterStatusToggle = () => setIsStatusFilterOpen(!isStatusFilterOpen)

  return (
    <StyledInvoiceHeader>
      <ItemWrapper>
        <H1>invoices</H1>
        <P2>
          <span>there are </span>7 <span>total</span>invoices
        </P2>
      </ItemWrapper>
      <Wrapper>
        <FilterByStatus
          isStatusFilterOpen={isStatusFilterOpen}
          filterStatusToggle={filterStatusToggle}
        />
        <NewInvoiceBtn />
      </Wrapper>
    </StyledInvoiceHeader>
  )
}

export default InvoiceHeader
