import { Drawer, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const drawerWidth= 240;
const useStyle= makeStyles({
    page:{
        backgroundColor:'#f9f9f9',
        width:'100%',
    },
    drawer:{
        width: drawerWidth
    },
    paperDrawer:{
        width: drawerWidth
    },
    root:{
        display: 'flex',
    }
})
export default function Layout({ children }) {
    const classes=useStyle()
    return (
        <div className={classes.root}>
            <Drawer 
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper: classes.paperDrawer}}
            >
            {/* classes is a built in method here to override css  */}
                <div>
                    <Typography variant="h5">
                        Ninja Notes
                    </Typography>
                </div>
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}
