import { Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { DeleteOutlined } from '@material-ui/icons';

const useStyle = makeStyles({
    test: {
        border: (note) => {
            if (note.category == 'work') {
                return '1px solid red'
            }
        }
    }
    //made a conditional style 
})
export default function NoteCard({ note, handleDelete }) {
    const classes = useStyle(note)
    return (
        <div>
            <Card elevation={2} className={classes.test}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(note.id)} >
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent >
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}
