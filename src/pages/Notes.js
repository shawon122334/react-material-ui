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
    <div>
      {notes.map(note => (
        <p key={note.id}>{ note.title }</p>
      ))}
    </div>
  )
}