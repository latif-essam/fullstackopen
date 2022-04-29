import React from 'react';


const ListItem = ({ item, toggleItem }) => {
    const label = item.important ? 'make not important' : 'make important';

    return (
        <li className='note'>
            <p>
                {item?.content}
            </p>
            <p>
                {item?.important ? '✔' : 'X'}
            </p>
            <p>
                <button onClick={toggleItem} className={`btn btn-${item.important ? 'secondary' : 'success'}`}> {label}</button>
            </p>
            <hr />
        </li>
    );
}

export default ListItem;