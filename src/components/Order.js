import React from 'react'
import { FaTrash } from 'react-icons/fa'

export const Order = (props) => {
    return (
        <div className='item'>
            <img 
                src={"./img/" + props.item.img}
                alt="" 
            />
            <h2>{props.item.title}</h2>
            <p>{props.item.price} BYN</p>
            <FaTrash className='delete-icon' onClick={() => props.onDelete(props.item.id)}/>
        </div>
    )
}

export default Order
