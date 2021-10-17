import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './design/themes'
import GlobalStyles from './design/GlobalStyles'

const App: React.FC = () => {
  const [mode, setMode] = useState(true)

  const handleMode = (): void => {
    setMode(!mode)
  }

  return (
    <ThemeProvider theme={mode ? theme.light : theme.dark}>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
