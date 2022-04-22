import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = ({ list, handleFilteredList }) => {


    return (
        <div>
            <h2>Countries:</h2>
            {list.length === 1 && <Country country={list[0]} special={true} />}
            {list.length > 10 && <></>}
            {list.length < 11 && list.length > 1 && <div style={{ height: '60vh', width: '100%', overflow: 'scroll' }}>
                <ul style={{ listStyle: 'none', boxShadow: '0px 0px 1px dodgerblue', padding: 5 }}>
                    {list.map((c, index) =>
                        <Country key={c.cca2 + index} handleFilteredList={handleFilteredList} country={c} />
                    )}
                </ul>
            </div>}
        </div>
    );
}

export default Countries;