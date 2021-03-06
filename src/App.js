import React, { useState } from 'react'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'
import Home from './Home'
import Header from './Header'
import MenuDrawer from './MenuDrawer'

const useStyles = makeStyles({
  root: {}
})

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#3EA6FF'
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF'
      },
      color: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF'
      }
    }
  })

  // const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <MenuDrawer darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  )
}

export default App
