import React from 'react';
import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({ cartItems, removeFromCart }) => {
      return (
    <div>
    <Typography variant="h6" gutterBottom>
            Shopping Cart
    </Typography>
          {cartItems.length === 0 ? (
    <Typography variant="body2">Your cart is empty</Typography>
          ) : (
    <List>
              {cartItems.map((item) => (
    <ListItem key={item.id}>
    <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
    <ListItemSecondaryAction>
    <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)}>
    <DeleteIcon />
    </IconButton>
    </ListItemSecondaryAction>
    </ListItem>
              ))}
    </List>)}
</div>
  );
};

export default Cart;