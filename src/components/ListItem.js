import React from 'react';


const ListItem = ({ item }) => {
    return (
        <li>
            <p>
                {item?.date}
            </p>
            <p>
                {item?.content}
            </p>
            <hr />
        </li>
    );
}

export default ListItem;