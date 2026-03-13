import {createSlice} from '@reduxjs/toolkit';
import {updateCart} from '../utils/cartUtils';
const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    :{cartItems: [],shippingAddress:{},paymentMethod:'PayPal'};

//Helper function.
// const addDecimal=(num)=>{ 
//     return (Math.round(num*100)/100).toFixed(2);
// }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            // 1. Find if the item already exists using _id
            const existItem = state.cartItems.find((x) => x._id === item._id);

            if (existItem) {
                // 2. Map through and replace the item only if the _id matches
                state.cartItems = state.cartItems.map((x) =>
                    x._id === existItem._id ? item : x
                );
            } else {
                // 3. Add the new item if it doesn't exist
                state.cartItems = [...state.cartItems, item];
            }

            // 4. Update prices and localStorage using the utility
            return updateCart(state);
        },

        removeFromCart:(state,action)=>{
              //we are having all the items which are not matching to the item which is to be deleted.

              state.cartItems=state.cartItems.filter((x)=>x._id!==action.payload);
              return updateCart(state);
        },

        saveShippingAddress:(state,action)=>{
                    state.shippingAddress=action.payload;
                    return updateCart(state);
        } ,

        savePaymentMethod:(state,action)=>{
                    state.paymentMethod=action.payload;
                    return updateCart(state);
        } ,
        
        clearCartItems:(state,action)=>{
            state.cartItems=[];
            return updateCart(state);
        },





    },
});

export const { addToCart,
    removeFromCart,
    saveShippingAddress,
    savePaymentMethod,
clearCartItems } = cartSlice.actions;

export default cartSlice.reducer;