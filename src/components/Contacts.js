import React from 'react';
import Contatc from './Contact';

const Contacts = ({ list }) => {

    return (
        <div>
            <h2>Contatcs:</h2>
            <ul style={{ listStyle: 'none', boxShadow: '0px 0px 1px dodgerblue', padding: 5 }}>
                {list && list.map(item =>
                    <Contatc key={item.id} item={item} />
                )}
            </ul>
        </div>
    );
}

export default Contacts;