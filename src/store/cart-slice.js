import { createSlice } from '@reduxjs/toolkit'

const  initialCartitem ={ items : [],  totalQuantity: 0}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartitem,
    reducers:{
        Add(state, action){
            const newItem = action.payload;
            const  existingItem = state.items.find((item) => item.id === newItem.id)
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice : newItem.price,
                    name: newItem.title
                });
               
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price; 
            }
        //  const updatedCartItem =state.totalAmount + action.itm.price * action.item.amount

        },
        remove(state, action){
            const id = action.payload;
            const existingItem = state.items.find( item => item.id === id);
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter( item => item.id !== id)

            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
})
export const cartAction = cartSlice.actions;
export default cartSlice;