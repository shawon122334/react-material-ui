import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
export default function Notes() {
  return (
    <Container>
      <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
        Create A New Note 
      </Typography>
      <Button onClick={()=>console.log('you clicked the button')} type="submit" color="primary" variant="contained">Submit</Button>
    </Container>
  )
}
