import { WeatherData } from '../data/weatherData'

interface WeatherDetailsProps {
  weather: WeatherData
}

export default function WeatherDetails({ weather }: WeatherDetailsProps) {
  const details = [
    { icon: '💧', label: 'رطوبت', value: `${weather.humidity}%`, color: 'from-blue-400 to-cyan-400' },
    { icon: '💨', label: 'سرعت باد', value: `${weather.windSpeed} km/h`, color: 'from-teal-400 to-green-400' },
    { icon: '🧭', label: 'جهت باد', value: weather.windDirection, color: 'from-green-400 to-emerald-400' },
    { icon: '🌡️', label: 'فشار هوا', value: `${weather.pressure} hPa`, color: 'from-purple-400 to-pink-400' },
    { icon: '👁️', label: 'دید افقی', value: `${weather.visibility} km`, color: 'from-indigo-400 to-blue-400' },
    { icon: '☀️', label: 'شاخص UV', value: `${weather.uvIndex}`, color: 'from-yellow-400 to-orange-400' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {details.map((detail, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
        >
          <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">{detail.icon}</span>
          <p className="text-blue-300 text-xs mb-1">{detail.label}</p>
          <p className="text-lg font-bold">{detail.value}</p>
        </div>
      ))}
    </div>
  )
}
