import * as React from 'react';
import CartCard from '../components/Cart/CartCard';

const filteroutdata = (response) => {
  const currentDate = new Date();
  
  const todayDateString = currentDate.toISOString().split('T')[0];

  const filteredArr = response.filter(item => {
     const itemDateString = new Date(item.date).toISOString().split('T')[0];
     return itemDateString === todayDateString;
  });
  return filteredArr.length > 0 ? filteredArr[0]?.products : filteredArr;
}


const Cart = () => {

  const [cartList, setCartList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);



  React.useEffect (() => {
    const fetchCart = async () =>{
    try {
      const sessionId = sessionStorage.getItem('yourSessionKey');
      const localStoragrId = localStorage.getItem('yourLocalKey');
      const response = await fetch ('https://fakestoreapi.com/carts/user/2')
      const data = await response.json();
      
      setCartList(filteroutdata(data));
    } catch (error)
    {
      console.error('Error fetching productCart:', error);
    } finally {
      setLoading(false);
    }
};
    

  fetchCart();
}, []);


if (loading) {
  return <p>Loading Product</p>
}
 
  return (
    <section className='cart'>
       {cartList?.map((product) => (
         <CartCard 
         key={product?.id}
         product={product}
         />

      
      ) )}
       <div className="cart-summary">
        <h2>Summary</h2>
        <p>Total Items: 1</p>
        <p>Total Price: $100</p>
        <button className="checkout-button">Proceed to Checkout</button>
      </div> 

    </section>
  );
};

export default Cart;
