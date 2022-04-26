import React from 'react';
import ListItem from './ListItem';

const List = ({ list }) => {

    return (
        <div>
            <h2>ListItems:</h2>
            <ul style={{ listStyle: 'none', boxShadow: '0px 0px 1px dodgerblue', padding: 5 }}>
                {list && list.map(item =>
                    <ListItem key={item.id} item={item} />
                )}
            </ul>
        </div>
    );
}

export default List;