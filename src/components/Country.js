import React, { useState } from 'react';


const Country = ({ country, handleFilteredList, special = false }) => {
    const [s, setS] = useState(special);
    const handleShowCountry = (c) => {
        setS(true);
        handleFilteredList([country]);
    }
    console.log({ country, special });
    return (
        <>
            {s && (
                <div>
                    <h2>{country.name.common}</h2>
                    <p> capital {country.capital}</p>
                    <p> area {country.area}</p>
                    <ul>
                        {Object.keys(country.languages).map((key) =>
                        (<li key={key}>
                            {country.languages[key]}
                        </li>))}
                    </ul>
                    <img width={200} src={country.flags.png} alt={country.name.common} />
                </div>
            )}
            {!s && (
                <li>
                    {country.name.common}
                    <button onClick={handleShowCountry}>show</button>

                </li>

            )}
            <hr />
        </>
    );
}

export default Country;