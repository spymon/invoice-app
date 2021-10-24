import { H3 } from '../helpers/FontComponents/styles'
import { StyledFilterByStatus, StyledFilterIcon } from './styles'

interface Props {
  isStatusFilterOpen: boolean
  filterStatusToggle: () => void
  onClick?: React.MouseEventHandler<HTMLElement>
}

const FilterByStatus: React.FC<Props> = ({
  filterStatusToggle,
  isStatusFilterOpen,
}) => {
  return (
    <StyledFilterByStatus onClick={() => filterStatusToggle()}>
      <H3>
        filter<span> by status</span>
      </H3>
      <StyledFilterIcon isStatusFilterOpen={isStatusFilterOpen} />
      {/* <FilterDropDown></FilterDropDown> */}
    </StyledFilterByStatus>
  )
}

export default FilterByStatus
