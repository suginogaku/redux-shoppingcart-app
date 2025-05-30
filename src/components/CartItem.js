import { useDispatch } from 'react-redux';
import { MinusIcon, PlusIcon } from '../HeroIcons';
import { minusItem, plusItem, removeItem } from '../features/cart/CartSlice';

const CartItem = ({ item }) => {
  const { id, title, img, price, amount } = item;
  const dispatch = useDispatch();

  return (
    <article className='cart-item'>
      <img src={img} alt='' />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}円</h4>
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>削除</button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => { dispatch(plusItem(id)) }} >
          <PlusIcon />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() => {
          if (amount === 1) {
            dispatch(removeItem(id))
          } else {
            dispatch(minusItem(id));
          }
        }}>
          <MinusIcon />
        </button>
      </div>
    </article>
  )
}

export default CartItem