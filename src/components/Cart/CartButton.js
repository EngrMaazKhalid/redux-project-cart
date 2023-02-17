import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-indx';
import {useDispatch, useSelector} from 'react-redux'

const CartButton = (props) => {
 const CartQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()
  const cartButtonHandler =()=> {
    dispatch(uiAction.toggle())
  }
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{CartQuantity}</span>
    </button>
  );
};  

export default CartButton;
