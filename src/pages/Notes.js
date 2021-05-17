import { Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

export default function Notes() {
  const [notes, setNotes] = useState([]);

  //this is homepage. data is saved in the json server,get data from db and showing to the homepage 
  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <Container>
      <Grid container>

        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <Paper>
              {note.title}
            </Paper>
          </Grid>
        ))}

      </Grid>
    </Container>
  )
}