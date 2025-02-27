import React from 'react'

export const ShowFullItem = (props) => {
    console.log(props)
    return (
        <div className='full-item'>
            <div>
                <img 
                    src={"./img/" + props.item.img} 
                    onClick={() => props.onShowItem(props.item)}
                    alt="" 
                />
                <h2>{props.item.title}</h2>
                <p>{props.item.desc}</p>
                <b>{props.item.price} BYN</b>
                <div className='add-to-cart' onClick={() => props.onAdd(props.item)}>+</div>
            </div>
        </div>
    )
}

export default ShowFullItem