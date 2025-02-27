import React, { useState } from 'react'

export const Categories = (props) => {
    const [categories] = useState([
        {
            key: 'all',
            name: 'Всё'
        },
        {
            key: 'motorbike',
            name: 'Мотоциклы'
        },
        {
            key: 'moped',
            name: 'Мопеды'
        },
        {
            key: 'scooter',
            name: 'Скутеры'
        },
        {
            key: 'ATV',
            name: 'Квадроциклы'
        }
    ]);

    return (
        <div className='categories'>
            {categories.map(el => (
                <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    )
}

export default Categories