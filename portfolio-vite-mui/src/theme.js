import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#0ea5e9' },   // Sky 500-ish
    secondary: { main: '#a78bfa' }, // Violet 400-ish
    background: { default: '#0e1117', paper: '#161b22' }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: [
      '-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Inter','Helvetica','Arial','sans-serif'
    ].join(','),
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 }
  },
  components: {
    MuiButton: { defaultProps: { variant: 'contained', disableElevation: true } },
    MuiCard: { styleOverrides: { root: { borderColor: '#30363d' } } }
  }
})

export default theme
