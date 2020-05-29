import React from 'react'
import { ShoppingItem } from '../../../models/ShoppingItem'
import './item-card.css'

interface ShoppingCardComponentProps {
    item: ShoppingItem;
    addToCart: (itm: ShoppingItem)=> void;
}

export const ShoppingCardComponent: React.FC<ShoppingCardComponentProps> = (props) => {
    const item = props.item;
    return (

        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{item.itemName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">${item.price}</h6>
                <p className="card-text">{item.description}</p>
                <button onClick={()=> props.addToCart(item)} className="card-link">Add to cart</button>
            </div>
        </div>
    )
}
