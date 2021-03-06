import React from 'react'
import { ShoppingItem } from '../../../models/ShoppingItem'
import './item-card.css'

interface CartCardComponentProps {
    item: ShoppingItem;
    removeFromCart: (itm: ShoppingItem)=> void;
}

export const CartCardComponent: React.FC<CartCardComponentProps> = (props) => {
    const item = props.item;
    return (

        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{item.itemName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">${item.price}</h6>
                <p className="card-text">{item.description}</p>
                <button onClick={()=> props.removeFromCart(item)} className="card-link">Remove From Cart</button>
            </div>
        </div>
    )
}
