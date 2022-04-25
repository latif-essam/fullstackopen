import React, { useEffect, useState } from 'react';
import Countries from './components/Countries';
import SearchC from './components/SearchC';

import axios from 'axios';
import * as API from './utils/APIs';

export const baseURL = 'http://localhost:3001/';

const App = (props) => {
  const [countries, setCountries] = useState([]);

  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    axios
      .get(API.countries.all).then(({ data }) => {
        const countries = data.reduce((a, b) => a.concat(b), []);
        setCountries(countries);
      })
      .catch(({ error }) => console.log({ error }));
  }, []);
  useEffect(() => {
    // axios.post(baseURL + "countries", countries).then((res) => console.log(res)).catch((e) => console.log({ e }));
    setFilteredCountries(countries);
  }, [countries])

  return (
    <div>
      <h1>Countries</h1>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <SearchC handleFilteredList={setFilteredCountries} list={countries} />
      </div>
      <Countries list={filteredCountries} handleFilteredList={setFilteredCountries} />

    </div>
  )
}

export default App