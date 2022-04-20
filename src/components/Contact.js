import React from 'react';


const Contatc = ({ contatc }) => {
    return (
        <li>
            <p>
                {contatc.name}
            </p>
            <p>
                {contatc.phone}
            </p>
            <hr />
        </li>
    );
}

export default Contatc;