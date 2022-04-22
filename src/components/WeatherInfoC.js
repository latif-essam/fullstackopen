import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { weather } from './../utils/APIs';


const WeatherInfoC = ({ country }) => {
    const [data, setData] = useState({});
    const [icon, setIcon] = useState('');
    useEffect(() => {
        console.log(process.env.REACT_APP_API_KEY)
        const appid = process.env.REACT_APP_API_KEY;
        const { latlng } = country.capitalInfo;
        const url = `${weather.endpoint}lat=${latlng[0]}&lon=${latlng[1]}&units=metric&appid=${'dc68b61c36e86dc81226d4cfef1d7b17'}`;

        axios
            .get(url)
            .then(({ data }) => {
                console.log({ data })
                const iconUrl = `${weather.icon}${data.weather[0].icon}@2x.png`;
                console.log({ iconUrl });
                setData(data);
                setIcon(iconUrl);
            })
            .catch((error) => console.log({ error }));
    }, [])


    return (
        <div>{data &&
            (<>
                <h2>Weather in {country.capital}</h2>
                <p>temperature {data?.main?.temp}  Celcius.</p>
                {icon && <img src={icon} alt={country.capital} />}
                <p>Wind Speed is {data?.wind?.speed} m/s </p>
            </>
            )}
        </div>
    );
}

export default WeatherInfoC;