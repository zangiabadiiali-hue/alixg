import { WeatherData } from '../data/weatherData'

interface WeatherCardProps {
  city: string
  weather: WeatherData
}

export default function WeatherCard({ city, weather }: WeatherCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 shadow-2xl">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-4 right-8 text-8xl">{weather.icon}</div>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side - City & Temp */}
        <div className="text-center md:text-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-1">{city}</h2>
          <p className="text-blue-200 text-lg mb-4">{weather.country}</p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <span className="text-7xl md:text-8xl font-light">{weather.temp}°</span>
            <div className="text-right">
              <span className="text-6xl">{weather.icon}</span>
              <p className="text-blue-200 mt-2">{weather.description}</p>
            </div>
          </div>
          <p className="text-blue-300 mt-3">
            حس واقعی: {weather.feelsLike}° | بیشینه: {weather.tempMax}° | کمینه: {weather.tempMin}°
          </p>
        </div>

        {/* Right side - Sunrise/Sunset */}
        <div className="flex flex-col gap-4 bg-white/5 rounded-2xl p-5 border border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌅</span>
            <div>
              <p className="text-blue-300 text-sm">طلوع آفتاب</p>
              <p className="text-xl font-semibold">{weather.sunrise}</p>
            </div>
          </div>
          <div className="h-px bg-white/10"></div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌇</span>
            <div>
              <p className="text-blue-300 text-sm">غروب آفتاب</p>
              <p className="text-xl font-semibold">{weather.sunset}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
