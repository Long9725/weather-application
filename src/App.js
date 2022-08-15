import './App.css';

import {useState, useEffect} from 'react';
import axios from 'axios';

import Footer from './component/Footer.js';

function App() {
  const [search, setSearch] = useState()
  const [allData, setAllData] = useState({
    city: 'Seoul',
    country: '',
    temp: '',
    humidity: '',
    tempMin: '',
    weatherId: '',
    weatherIcon: ''
  })

  useEffect(() => {
    fetchData(allData.city)
  }, [])

  const fetchData = async(city) => {
    try {
      const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`)

      await setAllData({
        city: result.data.name,
        country: result.data.sys.country,
        temp: result.data.main.temp,
        humidity: result.data.main.humidity,
        tempMin: result.data.main.temp_min,
        weatherId: result.data.weather[0].id,
        weatherIcon: result.data.weather[0].icon
      })
    } catch(e) {
      console.log(e)
    }
  }

  const handleSumbit = async (event) => {
    console.log(search)
    event.preventDefault()
    await fetchData(search)
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
    console.log(search)
  }

  return (
    <main>
      <div className='App'>
        <form onSubmit={handleSumbit}>
          <input
          value={search}
          type='text'
          name='city'
          placeholder='City name'
          onChange={handleChange}
          />
          <button htmlFor='city'>Search</button>
        </form>
        <section>
          <h1>{allData.city}</h1>
          <h2>{allData.country}</h2>  
          <h3>Temperature</h3>
          <p>{allData.temp}°C</p>
          <h3>Minimum temperature</h3>
          <p>{allData.tempMin}°C</p>
          <h3>Humidity</h3>
          <p>{allData.humidity}%</p>
          <img src={`http://openweathermap.org/img/wn/${allData.weatherIcon}@4x.png`}/>
        </section>
      </div>
    </main>
  );
}

export default App;