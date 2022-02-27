
import React from 'react';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts/useProducts'
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products,setProducts]=useProducts()
    
    const [cart,setCart]=useCart(products)
    
    const handleRemove=key=>{
        const newCart=cart.filter(product=>product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }

    return (
        <div className='shop-container'>
           <div className='product-container'>
                {
                    cart.map(product=><ReviewItem 
                    key={product.key}
                    handleRemove={handleRemove}
                    product={product}> 
                    </ReviewItem>)
                }
           </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                    </div>           
        </div>
    );
};

export default OrderReview;