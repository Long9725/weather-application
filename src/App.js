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
      <div className='form'>
        <form onSubmit={handleSumbit}>
          <input
          value={search}
          type='text'
          name='city'
          placeholder='Location'
          onChange={handleChange}
          />
          <button htmlFor='city'>Search</button>
        </form>
        <section>
          <div className='header-div'>
            <div>
              <div className='data'>
          <img src={`http://openweathermap.org/img/wn/${allData.weatherIcon}@2x.png`}/>
          <h1 className='title'>{allData.city}</h1>
          <h2 className='location'>{allData.country}</h2> 

          <div className='weather-description'>
          <div>
            <h3>Humidity</h3>
            <p>{allData.humidity}%</p>
          </div>
          <div>
            <h3>Temperature</h3>
            <p>{allData.temp}°C</p>
          </div>
          <div>
            <h3>Minimum temperature</h3>
            <p>{allData.tempMin}°C</p>
          </div>
          </div>
          </div>
          </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;