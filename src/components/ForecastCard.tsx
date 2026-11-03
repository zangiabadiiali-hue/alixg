import { ForecastData } from '../data/weatherData'

interface ForecastCardProps {
  forecast: ForecastData
}

export default function ForecastCard({ forecast }: ForecastCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <p className="text-blue-200 font-medium mb-2">{forecast.day}</p>
      <span className="text-4xl my-3 block">{forecast.icon}</span>
      <p className="text-sm text-blue-300 mb-2">{forecast.description}</p>
      <p className="text-2xl font-bold">{forecast.temp}°</p>
      <div className="flex justify-center gap-2 mt-2 text-sm text-blue-300">
        <span>↑{forecast.tempMax}°</span>
        <span>↓{forecast.tempMin}°</span>
      </div>
    </div>
  )
}
