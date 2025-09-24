import * as React from 'react'
import { ThemeProvider, CssBaseline, Container, AppBar, Toolbar, Typography, Grid, Card, CardContent, Button, Stack, Chip, CardMedia } from '@mui/material'
import theme from './theme'
import Contact from './Contact.jsx'

export default function App(){
  const [showContact, setShowContact] = React.useState(false)
  React.useEffect(()=>{
    const h = ()=> setShowContact(Boolean(window.showContact))
    window.addEventListener('contact-toggle', h)
    return ()=> window.removeEventListener('contact-toggle', h)
  },[])

  const [projects, setProjects] = React.useState([])
  React.useEffect(()=>{
    fetch('/projects.json').then(r=>r.json()).then(setProjects).catch(()=>setProjects([]))
  },[])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="transparent" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>Lana Swanson — Portfolio</Typography>
          <Stack direction="row" spacing={1}>
            <Button href="mailto:bluecircledev@gmail.com" color="primary">Email</Button>
            <Button href="https://github.com/BlueCircleDev" target="_blank" rel="noreferrer" color="primary">GitHub</Button>
            <Button href="https://www.linkedin.com/in/LanaSwanson" target="_blank" rel="noreferrer" color="secondary">LinkedIn</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <a href="#" onClick={(e)=>{e.preventDefault(); window.showContact = !window.showContact; const ev=new Event('contact-toggle'); window.dispatchEvent(ev);}}>Contact form</a>
        </Typography>
        <Typography variant="h4" gutterBottom>Projects</Typography>
        {!showContact && <Grid container spacing={2}>
          {projects.map((p, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card variant="outlined">{(() => { const slug = (p.title||'').toLowerCase().replace(/[^a-z0-9]+/g,'-'); return (<CardMedia component="img" src={`/thumbs/${slug}.png`} alt={p.title} />) })()}
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>{p.title}</Typography>
                  <Stack direction="row" spacing={1} sx={{ my: 1, flexWrap: 'wrap' }}>
                    {p.tags?.map((t, j)=>(<Chip key={j} size="small" label={t} />))}
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Button size="small" href={p.url} target="_blank" rel="noreferrer">Open</Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>}
        {showContact && <Contact /> }
          ))}
        </Grid>}
        {showContact && <Contact /> }
      </Container>
    </ThemeProvider>
  )
}
