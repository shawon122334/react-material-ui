import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { DeleteOutlined } from '@material-ui/icons';
import { blue, green, pink, yellow } from '@material-ui/core/colors';

const useStyle = makeStyles({
    // test: {
    //     border: (note) => {
    //         if (note.category == 'work') {
    //             return '1px solid red'
    //         }
    //     }
    // }
    //made a conditional style 
    avatar:{
        backgroundColor:(note)=>{
            if(note.category == 'work'){
                return yellow[700]
            }
            if(note.category == 'money'){
                return green[500]
            }
            if(note.category == 'reminder'){
                return pink[500]
            }
            return blue[500]
        }
    }

})
export default function NoteCard({ note, handleDelete }) {
    const classes = useStyle(note)
    return (
        <div>
            <Card elevation={2} className={classes.test}>
                <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
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
