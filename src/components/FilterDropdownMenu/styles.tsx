import styled from 'styled-components'
import { headingThree } from '../helpers/FontComponents/styles'

interface Props {
  isStatusFilterOpen: boolean
}

export const Dropdown = styled.div<Props>`
  position: relative;

  button {
    ${headingThree}
    border: none;
    color: ${props => props.theme.mainFontColor};
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-right: 40px;
    padding: 8px 5px;
    border-radius: 8px;
    cursor: pointer;

    @media (max-width: 375px) {
      margin-right: 16px;
    }

    img {
      margin-left: 16px;
      transform: ${props =>
        props.isStatusFilterOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
      transition: ${props => props.theme.designSystem.transition};

      @media (max-width: 375px) {
        margin-right: 12px;
      }
    }

    span {
      @media (max-width: 375px) {
        display: none;
      }
    }
  }
`

export const DropdownMenu = styled.div<Props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px;
  top: calc(100% + 23px);
  left: 50%;
  width: 192px;
  border-radius: 8px;
  padding: 24px;
  background-color: ${props => props.theme.filterDropdownBackgroundColor};
  box-shadow: ${props => props.theme.filterDropdownBoxShadowColor};
  transition: ${props => props.theme.designSystem.transition};
  pointer-events: ${props => (props.isStatusFilterOpen ? 'auto' : 'none')};
  opacity: ${props => (props.isStatusFilterOpen ? '1' : '0')};
  transform: ${props =>
    props.isStatusFilterOpen
      ? 'translateY(0px) translateX(-50%)'
      : 'translateY(-25px) translateX(-50%)'};
  transition: opacity 0.5s ease, transform 0.5s ease;

  label {
    display: flex;
    align-items: center;
    width: 100%;

    span {
      width: 16px;
      height: 16px;
      border: 1px solid
        ${props => props.theme.filterDropdownInputBackgroundColor};
      border-radius: 2px;
      background-color: ${props =>
        props.theme.filterDropdownInputBackgroundColor};
      transition: ${props => props.theme.designSystem.transition};
    }

    &:hover > span {
      border: 1px solid ${props => props.theme.designSystem.colors.purple};
    }
  }

  input {
    display: none;
  }

  p {
    ${headingThree}
    margin-left: 13px;
  }
`
