import React from 'react';
import noteServices from '../services/notes';
import ListItem from './ListItem';

const List = ({ list, handleUpdateItem }) => {

    const toggleImportanceOf = (item) => {
        noteServices
            .update(item.id, { ...item, important: !item.important })
            .then(({ data }) => {
                handleUpdateItem(list.map(n => n.id !== item.id ? n : data))
            })
            .catch(error => console.log({ error }));
    }
    return (
        <div>
            <h2>ListItems:</h2>
            <ul style={{ listStyle: 'none', boxShadow: '0px 0px 1px dodgerblue', padding: 5 }}>
                {list && list.sort((a, b) => a.date < b.date).map(item =>
                    <ListItem hand key={item.id} item={item} toggleItem={() => toggleImportanceOf(item)} />
                )}
            </ul>
        </div>
    );
}

export default List;