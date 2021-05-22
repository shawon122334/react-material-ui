import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import React from 'react'
import { useHistory, useLocation } from 'react-router';
const drawerWidth = 240;
const useStyle = makeStyles((theme) => {
    return {
        page: {
            backgroundColor: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        paperDrawer: {
            width: drawerWidth
        },
        root: {
            display: 'flex',
        },
        active: {
            background: '#f4f4f4'
        },
        title:{
            padding: theme.spacing(2)
        }
    }
})
export default function Layout({ children }) {
    const classes = useStyle()
    const menuItems = [
        {
            text: "My Notes",
            icon: <SubjectOutlined color="primary" />,
            path: '/',
        },
        {
            text: "Create Notes",
            icon: <AddCircleOutlineOutlined color="primary" />,
            path: '/create',
        }
    ]
    const history = useHistory()
    const location = useLocation()
    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.paperDrawer }}
            >
                {/* classes is a built in method here to override css  */}
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}
