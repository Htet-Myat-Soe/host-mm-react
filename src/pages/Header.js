import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
    return {
        appbar : {
            backgroundColor : theme.palette.primary.main
        },
        logo : {
            textDecoration : 'none',
            color : '#f4f4f4'
        }
    }
})

export default function Header() {

    const classes = useStyles();

  return (
    <>
        <AppBar className={classes.appbar}>
            <Toolbar>
               <Link to={`/`} className={classes.logo}> <Typography variant="title" component="h2">Host MM</Typography> </Link>
            </Toolbar>
        </AppBar>
    </>
  )
}
