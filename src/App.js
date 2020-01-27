import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import withTheme from './DefaultTheme'

const App = ({ toggleLightDarkMode }) => {
  return (
    <div>
      <FormControlLabel control={<Switch onClick={toggleLightDarkMode} />} />
      <Typography>body1</Typography>
    </div>
  )
}

const ThemedApp = withTheme(App)

export default ThemedApp
