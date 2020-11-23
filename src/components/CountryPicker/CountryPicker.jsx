import React, {useState, useEffect } from 'react';
import  { NativeSelect, FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
import styles from './CountryPicker.module.css'
import  { fetchCountries } from '../../api';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'; 
const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetechedCountries] = useState([]);
    const initialOption = "";
    const [value, setValue] = useState(initialOption);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetechedCountries(await fetchCountries());
        }
        fetchAPI();
    }, []);

    console.log(fetchedCountries);

    return(
        <Autocomplete 
            value={value}
            onChange = {(e, newValue) => {
                setValue(newValue);
                handleCountryChange(newValue);
            } }
            id="country-select-demo"
            options={fetchedCountries}
            getOptionLabel={(option) => option}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Choose a country" variant="outlined" />}
        />
        /*<FormControl variant="outlined" className={styles.formControl}>
            <InputLabel>Country</InputLabel>
            <Select
                defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}
                label="Country"
            >
                <MenuItem value="">United States</MenuItem>
                {fetchedCountries.map((country, i) => <MenuItem key={i} value={country}>{country}</MenuItem>)}
            </Select>
        </FormControl>*/
    );
}

export default CountryPicker;