import styled from 'styled-components'
import { headingThree } from '../helpers/FontComponents/styles'

interface Props {
  visible: boolean
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

    @media (max-width: 600px) {
      margin-right: 16px;
    }

    img {
      margin-left: 16px;
      transform: ${props =>
        props.visible ? 'rotate(180deg)' : 'rotate(0deg)'};
      transition: ${props => props.theme.designSystem.transition};

      @media (max-width: 600px) {
        margin-right: 12px;
      }
    }

    span {
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`

export const DropdownMenu = styled.div<Props>`
  position: absolute;
  z-index: 100;
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
  pointer-events: ${props => (props.visible ? 'auto' : 'none')};
  opacity: ${props => (props.visible ? '1' : '0')};
  transform: ${props =>
    props.visible
      ? 'translateY(0px) translateX(-50%)'
      : 'translateY(-25px) translateX(-50%)'};
  transition: opacity 0.5s ease, transform 0.5s ease;

  label {
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16px;
      height: 16px;
      border: 1px solid transparent;
      border-radius: 2px;
      background-color: ${props =>
        props.theme.filterDropdownInputBackgroundColor};
      transition: ${props => props.theme.designSystem.transition};

      img {
        opacity: 0;
        transition: ${props => props.theme.designSystem.transition};
      }
    }

    &:hover > span {
      border: 1px solid ${props => props.theme.designSystem.colors.purple};
    }

    input[type='checkbox']:checked + span {
      background-image: url('./../../assets/icon-check.svg');
      border: 1px solid ${props => props.theme.designSystem.colors.purple};
      background-color: ${props => props.theme.designSystem.colors.purple};

      img {
        opacity: 1;
      }
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
