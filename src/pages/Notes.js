import { Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  //this is homepage. data is saved in the json server,get data from db and showing to the homepage 
  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete=async (id)=>{
     await fetch('http://localhost:8000/notes/'+id,{
       method : 'DELETE'
     })
     const newNotes=notes.filter(note=> note.id != id )
     setNotes(newNotes)

      
  }
  return (
    <Container>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
        <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
        <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
        <Paper>4</Paper>   
        </Grid> */}

        {notes.map(note => (
          <Grid item key={note.id} xs={12} lg={4} md={6}>
            <NoteCard note={note} handleDelete={handleDelete}/>
          </Grid>
          
        ))}

      </Grid>
    </Container>
  )
}