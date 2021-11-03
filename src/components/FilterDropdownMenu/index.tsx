import { useState } from 'react'
import arrow from './../../assets/icon-arrow-down.svg'
import { Dropdown, DropdownMenu } from './styles'

interface Props {
  onClick?: () => any
}

const FilterDropdownMenu: React.FC<Props> = () => {
  const [isStatusFilterOpen, setIsStatusFilterOpen] = useState(false)
  console.log(isStatusFilterOpen)

  const filterStatusToggle = () => setIsStatusFilterOpen(!isStatusFilterOpen)

  return (
    <Dropdown isStatusFilterOpen={isStatusFilterOpen}>
      <button onClick={() => filterStatusToggle()}>
        Filter<span>&nbsp;by status</span>
        <img src={arrow} alt="" />
      </button>
      <DropdownMenu isStatusFilterOpen={isStatusFilterOpen}>
        <label>
          <input type="checkbox" />
          <span></span>
          <p>Draft</p>
        </label>
        <label>
          <input type="checkbox" />
          <span></span>
          <p>Pending</p>
        </label>
        <label>
          <input type="checkbox" />
          <span></span>
          <p>Paid</p>
        </label>
      </DropdownMenu>
    </Dropdown>
  )
}

export default FilterDropdownMenu
