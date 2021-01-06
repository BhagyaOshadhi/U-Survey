import {INCREASE,DECREASE,CLEAR_CART, REMOVE,GET_TOTAL} from './Actions'

function reducer(state,action){
  switch(action.type){
    case CLEAR_CART:
      return{...state,cart:[]}
    case INCREASE:
      let tempCart = state.cart.map(cartItem =>{
        if(cartItem.id === action.payload.id){
          cartItem = {...cartItem,amount:cartItem.amount + 1 }
        }
        return cartItem;
      });
      return{...state,cart:tempCart};
    case DECREASE:
      let tmpCart=[];
      if(action.payload.amount === 1){
        tmpCart = state.cart.filter((cartItem)=>
        cartItem.id !== action.payload.id)
      }
      else{
        tmpCart = state.cart.map(cartItem =>{
          if(cartItem.id === action.payload.id){
            cartItem = {...cartItem,amount:cartItem.amount - 1 }
          }
          return cartItem;
        });
      }
      return{...state,cart:tmpCart};
      case GET_TOTAL:
        let { total, amount } = state.cart.reduce(
          (cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;
    
            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
    
            return cartTotal;
          },
          {
            total: 0,
            amount: 0
          }
        );
        total = parseFloat(total.toFixed(2));
        return { ...state, total, amount };
    default:
        return state;
  }
  // if(action.type === CLEAR_CART){
  //   return{...state,cart:[]}
  // }
  //   return state;
  }
  export default reducer;