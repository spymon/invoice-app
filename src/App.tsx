import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './design/themes'
import GlobalStyles from './design/GlobalStyles'
import Navbar from './components/Navbar'
import { Container } from './components/helpers/Container'
import { ItemWrapper as Wrapper } from './components/helpers/ItemWrapper'

const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState(false)

  const handleThemeMode = (): void => {
    setThemeMode(!themeMode)
  }

  return (
    <ThemeProvider theme={themeMode ? theme.light : theme.dark}>
      <GlobalStyles />
      <Container>
        <Navbar themeMode={themeMode} handleThemeMode={handleThemeMode} />
        <Wrapper>{/* invoice component */}</Wrapper>
      </Container>
    </ThemeProvider>
  )
}

export default App
