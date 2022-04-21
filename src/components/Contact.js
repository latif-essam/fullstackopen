import React from 'react';


const Contatc = ({ item }) => {
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

export default Contatc;