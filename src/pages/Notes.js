import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import SendIcon from '@material-ui/icons/Send';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { FormControl, FormControlLabel, makeStyles, RadioGroup, Radio, FormLabel } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})


export default function Notes() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState('');
  const [detailsError, setDetailsError] = useState('');
  const [category, setCategory] = useState('money');


  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title == '') {
      setTitleError(true);
    }
    if (details == '') {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category)
    }
  }
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="secondary"
        gutterBottom>
        Create A New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="New Note"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="primary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={< Radio />} label="Money" />
            <FormControlLabel value="todos" control={< Radio />} label="ToDos" />
            <FormControlLabel value="reminder" control={< Radio />} label="Reminder" />
            <FormControlLabel value="work" control={< Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          startIcon={<SendIcon />}
          endIcon={<ArrowForwardIosIcon />}
        >Submit</Button>
      </form>

    </Container>
  )
}
