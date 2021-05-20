import { makeStyles } from '@material-ui/core'
import React from 'react'
const useStyle= makeStyles({
    page:{
        backgroundColor:'#f9f9f9',
        width:'100%',
    }
})
export default function Layout({ children }) {
    const classes=useStyle()
    return (
        <div>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}
