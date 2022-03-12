import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { selectedItem } from '../redux/actions/itemActions';

const useStyles = makeStyles((theme) => {
    return {
       box : {
           width : 400,
           margin : 'auto'
       }
    }
})


export default function Checkout() {
    const classes = useStyles();
    const history = useHistory();
    const { item } = useSelector(state => state.allItems);
    const dispatch = useDispatch();
    const { id } = useParams();

    const [name, setName] = useState('');
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState('');
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [units, setUnits] = useState([]);


    useEffect(() => {
        dispatch(selectedItem(id));        
    },[id]);

    useEffect(() => {
        setName(item.name);
        setPrice(item.price);
        setUnits([...item.units]);
    },[item])

    const handleChange = e => {
        const { target: { value } } = e;

         setUnits(typeof value === 'string' ? value.split(',') : value,)
    }

    const qtyChange = e => {
        setQty(e.target.value);
        setPrice(e.target.value * price)
    }

  return (
    <div>
        <Box className={classes.box}>
            <Typography component="h2" variant="title">Checkout Here</Typography>
            <form>
                <TextField 
                    fullWidth
                    margin="dense"
                    id="name" 
                    label="Item Name" 
                    variant="standard" 
                    type="text"
                    value={name}
                    disabled
                />
                <TextField 
                    fullWidth
                    margin="dense"
                    id="price" 
                    label="Item Price" 
                    variant="standard" 
                    type="text"
                    value={price}
                    disabled
                />
                <TextField 
                    fullWidth
                    margin="dense"
                    id="qty" 
                    label="Item Quantity" 
                    variant="standard"
                    type="number" 
                    value={qty}
                    min="1"
                    onChange={qtyChange}
                />
                <TextField 
                    fullWidth
                    margin="dense"
                    id="uname" 
                    label="User Name" 
                    variant="standard" 
                    value={uname}
                    onChange={e => setUname(e.target.value)}

                />
                <TextField 
                    fullWidth
                    margin="dense"
                    id="email" 
                    label="User Email" 
                    variant="standard" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                
                <InputLabel id="units">Units</InputLabel>
                <Select
                    labelId='units'
                    multiple
                    value={units}
                    variant="standard" 
                    fullWidth
                    margin="dense"
                    onChange={handleChange}
                >
                    {
                        units.map(unit => (
                            <MenuItem
                                key={unit.id}
                                value={unit.id}
                            >
                                {unit.name}
                            </MenuItem>
                        ))
                    }
                </Select>


                <Button type="submit" sx={{ marginTop : 2 }} onClick={() => history.pushState('/')} variant='contained' color='secondary'>Back</Button>
                <Button type="submit" sx={{ marginTop : 2, marginLeft : 2 }} variant='contained' color='primary'>Checkout</Button>
            </form>
        </Box>
    </div>
  )
}
