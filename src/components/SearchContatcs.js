import React, { useState } from 'react';


const SearchContatcs = ({ list, handleFilteredContacts }) => {
    const [input, setInput] = useState('');

    const handleSearch = (e) => {
        setInput(e.target.value);
        const newList = list.filter(p => p.name.toLocaleLowerCase().search(e.target.value.toLocaleLowerCase()) !== -1);
        handleFilteredContacts(newList);
    }
    return (
        <div className='box_shadow'>
            <h2>
                Search for Contact:
            </h2>
            <input type="text"
                onBlur={() => {
                    setInput('')
                    handleFilteredContacts(list)
                }}
                value={input}
                onChange={handleSearch} /></div>
    );
}

export default SearchContatcs;