import { useOutsideClicker } from '../../hooks/useOutsideClicker'
import arrow from './../../assets/icon-arrow-down.svg'
import { Dropdown, DropdownMenu } from './styles'
import checked from './../../assets/icon-check.svg'

interface IProps {
  onClick?: () => any
}

const FilterDropdownMenu: React.FC<IProps> = () => {
  const { visible, setVisible, ref } = useOutsideClicker(false)

  return (
    <Dropdown ref={ref} visible={visible}>
      <button onClick={() => setVisible(!visible)}>
        Filter<span>&nbsp;by status</span>
        <img src={arrow} alt="" />
      </button>
      <DropdownMenu visible={visible}>
        <label>
          <input type="checkbox" />
          <span>
            <img src={checked} alt="" />
          </span>
          <p>Draft</p>
        </label>
        <label>
          <input type="checkbox" />
          <span>
            <img src={checked} alt="" />
          </span>
          <p>Pending</p>
        </label>
        <label>
          <input type="checkbox" />
          <span>
            <img src={checked} alt="" />
          </span>
          <p>Paid</p>
        </label>
      </DropdownMenu>
    </Dropdown>
  )
}

export default FilterDropdownMenu
