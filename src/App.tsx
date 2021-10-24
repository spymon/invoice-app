import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './design/themes'
import GlobalStyles from './design/GlobalStyles'
import Navbar from './components/Navbar'
import { Container } from './components/helpers/Container'
import InvoiceContainer from './components/InvoiceContainer'

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
        <InvoiceContainer />
      </Container>
    </ThemeProvider>
  )
}

export default App
