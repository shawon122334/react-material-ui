import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import SendIcon from '@material-ui/icons/Send';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Notes() {
  return (
    <Container>
      <Typography 
      variant="h6" 
      component="h2" 
      color="textSecondary" 
      gutterBottom>
        Create A New Note 
      </Typography>
      <Button onClick={()=>console.log('you clicked the button')} 
      type="submit"
      color="primary"
      variant="contained"
      startIcon={<SendIcon/>}
      endIcon={<ArrowForwardIosIcon/>}
      >Submit</Button>
    </Container>
  )
}
