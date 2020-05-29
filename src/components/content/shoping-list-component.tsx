import React from 'react'
import { ShoppingCardComponent } from './shopping-items/item-card'
import './shopping.css'
import { ShoppingItem } from '../../models/ShoppingItem';

interface ShoppingListProps {
    setView: (str: 'SHOPPING_LIST' | 'SHOPPING_CART')=> void;
    items: ShoppingItem[];
    addToCart: (item:ShoppingItem)=>void;
}

export const ShoppingListComponent: React.FC<ShoppingListProps> = (props) => {

    const renderCards = () =>{
        return props.items.map(item => {
            return(<ShoppingCardComponent addToCart={props.addToCart} item={item}></ShoppingCardComponent>)
        })
    }
    return (
        <section>
            <header>
                <h3>
                    Shopping List
                </h3>
                <hr></hr><div className="cart-button">
                <button  onClick={()=>props.setView('SHOPPING_CART')}>View cart</button></div>
            </header>
            <section>
                {renderCards()}
            </section>
            
        </section>);
}