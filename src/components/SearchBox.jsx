import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import '../styles/SearchBox.css'

export default function SearchBox({updateWeatherInfo}){
    const [searchValue, setSearchValue] = useState("")
    const [weatherInfo, setWeatherInfo] = useState({})

    const API_URL = import.meta.env.VITE_API_URL
    const API_KEY = import.meta.env.VITE_API_KEY

    async function getWeatherInfo(url, apikey, city){
        let res = await fetch(`${url}?q=${city}&appid=${apikey}&units=metric`)
        let data = await res.json()
        return data      
    }
    
    function handleSearchVal(e){
        setSearchValue(e.target.value)
    }

    async function handleFormSubmit(e){
        e.preventDefault()
        getWeatherInfo(API_URL, API_KEY, searchValue)
        setSearchValue("")
        let info = await getWeatherInfo(API_URL, API_KEY, searchValue)
        updateWeatherInfo(info)
    }

    return(
        <div id='SearchBox'>
            <h2>Weather Widget</h2>
            <form action="" onSubmit={handleFormSubmit}>
                <TextField id="search-field" label="Search City" variant="outlined" value={searchValue} onChange={handleSearchVal} required />
                <Button id="search-btn" variant="outlined" type="submit">Search</Button>
            </form>
        </div>
    )
}