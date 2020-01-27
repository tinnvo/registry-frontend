import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const defaultTheme = {
  palette: {
    primary: {
      main: '#2c3e50',
      secondary: '#ecf0f1'
    },
    type: 'dark'
  }
}

const withTheme = WrappedComponent => {
  class WithTheme extends React.Component {
    constructor() {
      super()
      this.state = {
        theme: defaultTheme
      }
    }

    toggleLightDarkMode = () => {
      const {
        palette: { type }
      } = this.state.theme

      const newTheme = {
        theme: {
          ...this.state.theme,
          palette: {
            ...this.state.theme.palette,
            type: type === 'light' ? 'dark' : 'light'
          }
        }
      }
      this.setState(newTheme)
    }

    render() {
      const { theme } = this.state
      const themeConfig = createMuiTheme(theme)
      return (
        <ThemeProvider theme={themeConfig}>
          <WrappedComponent
            toggleLightDarkMode={this.toggleLightDarkMode}
            {...this.props}
          />
          <CssBaseline />
        </ThemeProvider>
      )
    }
  }
  return WithTheme
}

export default withTheme
