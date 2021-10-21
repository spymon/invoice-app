import { LogoWrapper, NavbarWrapper, Rectangle, StyledNavbar } from './styles'

import avatar from './../../assets/image-avatar.jpg'
import { StyledThemeIcon } from '../ThemeModeIcon/style'

interface Props {
  themeMode: boolean
  handleThemeMode: () => void
}

const Navbar: React.FC<Props> = ({ themeMode, handleThemeMode }) => {
  return (
    <>
      <StyledNavbar>
        <LogoWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
            />
          </svg>
        </LogoWrapper>
        <NavbarWrapper>
          <StyledThemeIcon
            themeMode={themeMode}
            handleThemeMode={handleThemeMode}
          />
          <Rectangle />
          <img src={avatar} alt="avatar" />
        </NavbarWrapper>
      </StyledNavbar>
    </>
  )
}

export default Navbar
