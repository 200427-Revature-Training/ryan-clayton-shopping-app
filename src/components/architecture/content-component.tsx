import React, { useState } from 'react';
import { getElementError } from '@testing-library/react';
import { ShoppingCartComponent } from '../content/shoping-cart-component'
import { ShoppingListComponent } from '../content/shoping-list-component'
import { ShoppingItem } from '../../models/ShoppingItem';
export const childViews = {
    shoppingList: 'SHOPPING_LIST',
    shoppingCart: 'SHOPPING_CART'
}

const initialItems: ShoppingItem[]=[{
    itemName:'Grapes',
    price:10.00,
    description:'Yummy fruit'
},{
    itemName:'Lemon',
    price:1.00,
    description:'Sour fruit'
}
];

const ContentComponent: React.FC = () => {
    const [view, setView] =
        useState<'SHOPPING_CART' | 'SHOPPING_LIST'>('SHOPPING_LIST');
    const [cart, setCart] = useState<ShoppingItem[]>([]);
    
    const addToCart = (item : ShoppingItem)=>{
        setCart([...cart,item])
    }
    const removeFromCart = (item: ShoppingItem)=>{
        setCart(cart.filter(itm=> itm!= item))
    }
    const getCurrentView = () => {
        switch (view) {
            case childViews.shoppingCart: return <h1><ShoppingCartComponent removeFromCart= {removeFromCart} cart = {cart} setView={setView}></ShoppingCartComponent></h1>
            case childViews.shoppingList: return <h1><ShoppingListComponent addToCart={addToCart}items={initialItems} setView={setView}></ShoppingListComponent></h1>
            default: return <React.Fragment />;
        }


    }
    return (

            <main>
                {getCurrentView()}
            </main>)
}

export default ContentComponent;