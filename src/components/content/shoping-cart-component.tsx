import React from 'react';
import { ShoppingItem } from '../../models/ShoppingItem';
import {CartCardComponent} from './shopping-items/cart-card'


interface ShoppingCartProps {
    setView: (str: 'SHOPPING_LIST' | 'SHOPPING_CART')=> void;
    cart: ShoppingItem[];
    removeFromCart: (item:ShoppingItem)=>void;
}

export const ShoppingCartComponent: React.FC<ShoppingCartProps> = (props) => {
    const renderCards = () =>{
        return props.cart.map(cart => {
            return(<CartCardComponent removeFromCart={props.removeFromCart} item={cart}></CartCardComponent>)
        })
    }
    const getTotal=()=>{
        return props.cart.map((item)=>item.price).reduce((a,b)=>a+b,0);

    }
    return (
        <section>
            <header>
                <h3>
                    Shopping Cart
                </h3>
                <hr></hr><div className="cart-button">
    <span>Subtotal :${getTotal()}</span>
                <button  onClick={()=>props.setView('SHOPPING_LIST')}>Back to store</button>
                </div>
                <section>
                {renderCards()}

                </section>
            </header>
        </section>);
}