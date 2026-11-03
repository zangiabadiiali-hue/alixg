import { useState } from 'react'
import WeatherCard from './components/WeatherCard'
import ForecastCard from './components/ForecastCard'
import SearchBar from './components/SearchBar'
import WeatherDetails from './components/WeatherDetails'
import { getWeatherByCity, WeatherData, ForecastData } from './data/weatherData'

function App() {
  const defaultWeather = getWeatherByCity('تهران')!
  const [city, setCity] = useState('تهران')
  const [weather, setWeather] = useState<WeatherData>(defaultWeather)
  const [forecast, setForecast] = useState<ForecastData[]>(defaultWeather.forecast)
  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState('')

  const handleSearch = () => {
    if (!searchQuery.trim()) return
    const data = getWeatherByCity(searchQuery.trim())
    if (data) {
      setCity(searchQuery.trim())
      setWeather(data)
      setForecast(data.forecast)
      setError('')
    } else {
      setError('شهر مورد نظر یافت نشد!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white font-sans" dir="rtl">
      {/* Header */}
      <header className="pt-8 pb-4 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
            ☁️ هواشناسی
          </h1>
          <p className="text-blue-200 text-lg">پیش‌بینی دقیق آب و هوا</p>
        </div>
      </header>

      {/* Search */}
      <section className="px-4 py-4">
        <div className="max-w-xl mx-auto">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
          />
          {error && (
            <p className="text-red-300 text-center mt-2 text-sm animate-pulse">{error}</p>
          )}
        </div>
      </section>

      {/* Main Weather */}
      <section className="px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <WeatherCard city={city} weather={weather} />
        </div>
      </section>

      {/* Details */}
      <section className="px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <WeatherDetails weather={weather} />
        </div>
      </section>

      {/* Forecast */}
      <section className="px-4 py-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-blue-200">📅 پیش‌بینی ۵ روز آینده</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {forecast.map((day, index) => (
              <ForecastCard key={index} forecast={day} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-blue-300 text-sm border-t border-white/10">
        <p>ساخته شده با ❤️ | داده‌های شبیه‌سازی شده</p>
      </footer>
    </div>
  )
}

export default App
