import React, { useState } from 'react';


const SearchC = ({ list, handleFilteredList }) => {
    const [input, setInput] = useState('');
    const [fList, setFList] = useState(list);

    const handleSearch = (e) => {
        setInput(e.target.value);
        const newList = list.filter(el => el.name.common.toLocaleLowerCase().search(e.target.value.toLocaleLowerCase()) !== -1);

        setFList(newList);
        handleFilteredList(newList);
    }
    return (
        <div className='box_shadow'>
            <h2>
                Search for Country:
            </h2>
            <input type="text"
                // onBlur={() => {
                //     setInput('')
                //     handleFilteredList(list)
                // }}
                value={input}
                onChange={handleSearch} />
            {fList.length > 10 && input.length > 0 && <p>Too many matches, be more specific</p>}
        </div>
    );
}

export default SearchC;