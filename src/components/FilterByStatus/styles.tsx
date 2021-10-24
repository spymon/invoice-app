import styled from 'styled-components'

export const StyledFilterByStatus = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 40px;
  cursor: pointer;

  @media (max-width: 375px) {
    margin-right: 18px;
  }
`

interface Props {
  className?: string
  isStatusFilterOpen: boolean
}
const FilterIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="11"
      height="7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1l4.228 4.228L9.456 1"
        stroke="#7C5DFA"
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  )
}

export const StyledFilterIcon = styled(FilterIcon)`
  margin-left: 16px;
  transform: ${props =>
    props.isStatusFilterOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: ${props => props.theme.designSystem.transition};
`
