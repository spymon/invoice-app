import styled from 'styled-components'
import { ItemWrapper } from '../helpers/ItemWrapper'

export const StyledNavbar = styled.nav`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 999;
  background-color: ${props => props.theme.navbarBackgroundColor};
  top: 0;
  left: 0;
  height: 100vh;
  width: 103px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: ${props => props.theme.designSystem.transition};

  @media (max-width: 768px) {
    flex-direction: row;
    height: 80px;
    width: 100%;
    border-radius: 0;
  }

  @media (max-width: 375px) {
    height: 76px;
  }
`

export const LogoWrapper = styled.div`
  position: relative;
  width: 103px;
  height: 103px;
  background-color: ${props => props.theme.designSystem.colors.purple};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.designSystem.colors.lightPurple};
    border-top-left-radius: 20px;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.44);
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;

    svg {
      transform: translate(-50%, -50%) scale(1.12);
    }
  }

  @media (max-width: 375px) {
    width: 76px;
    height: 76px;

    svg {
      transform: translate(-50%, -50%) scale(1.02);
    }
  }
`

export const NavbarWrapper = styled(ItemWrapper)`
  display: ${props => (props.display ? props.display : 'flex')};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: ${props =>
    props.JustifyContent ? props.JustifyContent : 'center'};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  background-color: ${props => props.theme.navbarBackgroundColor};
  transition: ${props => props.theme.designSystem.transition};
  margin: 0, 0, 20px, 0;

  img {
    border-radius: 50%;
    max-width: 40px;
    margin: 24px 0;
  }

  @media (max-width: 768px) {
    flex-direction: row;

    img {
      border-radius: 50%;
      max-width: 32px;
      margin: 0 24px;
    }
  }
`
export const Rectangle = styled.div`
  height: 1px;
  width: 100%;
  background-color: #494e6e;

  @media (max-width: 768px) {
    height: 100%;
    width: 1px;
  }
`
