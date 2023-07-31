import { Page } from './Home/Page'
import { ThemeProvider } from 'styled-components'
import { theme } from '../defaultThemes'
import { GlobalStyle } from '../globalStyle'
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page />

      <GlobalStyle />
    </ThemeProvider>
  )
}
