import { Button, Card, CardActions, CardContent, Chip, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItems } from '../redux/actions/itemActions';


const useStyles = makeStyles((theme) => {
    return {
        itemsContainer : {
            padding : theme.spacing(2),
        }
    }
})

export default function Home() {

    const { items , loading} = useSelector(state => state.allItems);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItems());
    },[])

  const classes = useStyles();

  return (
    <div>
        <Box className={classes.itemsContainer}>
            <Typography variant='title' component='h2' sx={{ margin : '20px 0' }}>
                All Items are here !
            </Typography>
            <Grid container spacing={2}>
               {
                   loading ? <p>Loading...</p> :
                   items.map(item => (
                    <Grid item xs={4} key={item.id}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ marginBottom : 3 }}>
                                <strong>Price : </strong> {item.price}
                            </Typography>
                            {item.units.map(unit => (
                                 <Chip label={unit.name} sx={{ marginLeft : 1 }} />
                            ))}                            
                        </CardContent>
                        <CardActions>
                            <Link to={`/checkout/${item.id}`}><Button size="small" color='primary' variant='contained'>Checkout</Button></Link>
                        </CardActions>
                    </Card>
                    </Grid>
 
                   ))
               }
            </Grid>
        </Box>
    </div>
  )
}
