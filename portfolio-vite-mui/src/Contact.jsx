import * as React from 'react'
import { Container, TextField, Button, Stack, Typography, Alert } from '@mui/material'

export default function Contact(){
  const [ok, setOk] = React.useState(false)
  const onSubmit = (e) => {
    // If you prefer Netlify Forms, create a static contact.html under /public and configure Netlify.
    // Default here uses Formspree placeholder; replace the action with your endpoint ID.
  }
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Contact</Typography>
      {ok && <Alert severity="success">Thanks! I’ll get back to you.</Alert>}
      <form action="https://formspree.io/f/YOUR_ID" method="POST" onSubmit={()=>setOk(true)}>
        <Stack spacing={2} sx={{ maxWidth: 520 }}>
          <TextField label="Name" name="name" required />
          <TextField label="Email" name="email" type="email" required />
          <TextField label="Message" name="message" multiline rows={5} required />
          <Button type="submit" variant="contained">Send</Button>
          <Typography variant="body2">Or email me: <a href="mailto:bluecircledev@gmail.com">bluecircledev@gmail.com</a></Typography>
        </Stack>
      </form>
    </Container>
  )
}
