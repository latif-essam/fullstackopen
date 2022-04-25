import React, { useState } from 'react';
import WeatherInfoC from './WeatherInfoC';


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
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{ paddingInline: 10 }}>

                        <h2>{country.name.common}</h2>
                        <p> capital {country.capital}</p>
                        <p> area {country.area}</p>
                        <h3>Languages:</h3>
                        <ul>
                            {Object.keys(country.languages).map((key) =>
                            (<li key={key}>
                                {country.languages[key]}
                            </li>))}
                        </ul>
                        <img width={200} src={country.flags.png} alt={country.name.common} />
                    </div>
                    <WeatherInfoC country={country} />
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