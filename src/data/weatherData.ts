export interface ForecastData {
  day: string
  temp: number
  tempMin: number
  tempMax: number
  icon: string
  description: string
}

export interface WeatherData {
  city: string
  country: string
  temp: number
  feelsLike: number
  tempMin: number
  tempMax: number
  humidity: number
  windSpeed: number
  windDirection: string
  pressure: number
  visibility: number
  uvIndex: number
  description: string
  icon: string
  sunrise: string
  sunset: string
  forecast: ForecastData[]
}

const weatherDatabase: Record<string, WeatherData> = {
  'تهران': {
    city: 'تهران',
    country: 'ایران',
    temp: 28,
    feelsLike: 30,
    tempMin: 22,
    tempMax: 34,
    humidity: 35,
    windSpeed: 12,
    windDirection: 'شمال غربی',
    pressure: 1013,
    visibility: 10,
    uvIndex: 7,
    description: 'آفتابی',
    icon: '☀️',
    sunrise: '۰۶:۱۵',
    sunset: '۲۰:۳۰',
    forecast: [
      { day: 'شنبه', temp: 30, tempMin: 23, tempMax: 35, icon: '☀️', description: 'آفتابی' },
      { day: 'یکشنبه', temp: 27, tempMin: 20, tempMax: 32, icon: '⛅', description: 'نیمه ابری' },
      { day: 'دوشنبه', temp: 25, tempMin: 18, tempMax: 30, icon: '🌧️', description: 'بارانی' },
      { day: 'سه‌شنبه', temp: 29, tempMin: 21, tempMax: 33, icon: '☀️', description: 'آفتابی' },
      { day: 'چهارشنبه', temp: 31, tempMin: 24, tempMax: 36, icon: '☀️', description: 'آفتابی' },
    ]
  },
  'اصفهان': {
    city: 'اصفهان',
    country: 'ایران',
    temp: 35,
    feelsLike: 37,
    tempMin: 26,
    tempMax: 40,
    humidity: 20,
    windSpeed: 8,
    windDirection: 'جنوبی',
    pressure: 1010,
    visibility: 12,
    uvIndex: 9,
    description: 'آفتابی و گرم',
    icon: '🌞',
    sunrise: '۰۶:۲۰',
    sunset: '۲۰:۴۵',
    forecast: [
      { day: 'شنبه', temp: 36, tempMin: 27, tempMax: 41, icon: '☀️', description: 'آفتابی' },
      { day: 'یکشنبه', temp: 34, tempMin: 25, tempMax: 39, icon: '☀️', description: 'آفتابی' },
      { day: 'دوشنبه', temp: 33, tempMin: 24, tempMax: 38, icon: '⛅', description: 'نیمه ابری' },
      { day: 'سه‌شنبه', temp: 35, tempMin: 26, tempMax: 40, icon: '☀️', description: 'آفتابی' },
      { day: 'چهارشنبه', temp: 37, tempMin: 28, tempMax: 42, icon: '🌞', description: 'بسیار گرم' },
    ]
  },
  'شیراز': {
    city: 'شیراز',
    country: 'ایران',
    temp: 32,
    feelsLike: 33,
    tempMin: 24,
    tempMax: 37,
    humidity: 28,
    windSpeed: 10,
    windDirection: 'غربی',
    pressure: 1012,
    visibility: 11,
    uvIndex: 8,
    description: 'صاف',
    icon: '☀️',
    sunrise: '۰۶:۲۵',
    sunset: '۲۰:۵۰',
    forecast: [
      { day: 'شنبه', temp: 33, tempMin: 25, tempMax: 38, icon: '☀️', description: 'آفتابی' },
      { day: 'یکشنبه', temp: 31, tempMin: 23, tempMax: 36, icon: '⛅', description: 'نیمه ابری' },
      { day: 'دوشنبه', temp: 30, tempMin: 22, tempMax: 35, icon: '⛅', description: 'نیمه ابری' },
      { day: 'سه‌شنبه', temp: 32, tempMin: 24, tempMax: 37, icon: '☀️', description: 'آفتابی' },
      { day: 'چهارشنبه', temp: 34, tempMin: 26, tempMax: 39, icon: '☀️', description: 'آفتابی' },
    ]
  },
  'تبریز': {
    city: 'تبریز',
    country: 'ایران',
    temp: 22,
    feelsLike: 20,
    tempMin: 15,
    tempMax: 26,
    humidity: 55,
    windSpeed: 18,
    windDirection: 'شمال شرقی',
    pressure: 1018,
    visibility: 8,
    uvIndex: 5,
    description: 'ابری',
    icon: '☁️',
    sunrise: '۰۶:۰۵',
    sunset: '۲۰:۲۰',
    forecast: [
      { day: 'شنبه', temp: 20, tempMin: 13, tempMax: 24, icon: '🌧️', description: 'بارانی' },
      { day: 'یکشنبه', temp: 18, tempMin: 12, tempMax: 22, icon: '🌧️', description: 'بارانی' },
      { day: 'دوشنبه', temp: 21, tempMin: 14, tempMax: 25, icon: '⛅', description: 'نیمه ابری' },
      { day: 'سه‌شنبه', temp: 23, tempMin: 16, tempMax: 27, icon: '☀️', description: 'آفتابی' },
      { day: 'چهارشنبه', temp: 24, tempMin: 17, tempMax: 28, icon: '☀️', description: 'آفتابی' },
    ]
  },
  'مشهد': {
    city: 'مشهد',
    country: 'ایران',
    temp: 25,
    feelsLike: 26,
    tempMin: 18,
    tempMax: 30,
    humidity: 42,
    windSpeed: 14,
    windDirection: 'شرقی',
    pressure: 1015,
    visibility: 9,
    uvIndex: 6,
    description: 'نیمه ابری',
    icon: '⛅',
    sunrise: '۰۵:۵۰',
    sunset: '۲۰:۱۰',
    forecast: [
      { day: 'شنبه', temp: 26, tempMin: 19, tempMax: 31, icon: '⛅', description: 'نیمه ابری' },
      { day: 'یکشنبه', temp: 24, tempMin: 17, tempMax: 29, icon: '🌧️', description: 'بارانی' },
      { day: 'دوشنبه', temp: 22, tempMin: 15, tempMax: 27, icon: '🌧️', description: 'بارانی' },
      { day: 'سه‌شنبه', temp: 25, tempMin: 18, tempMax: 30, icon: '⛅', description: 'نیمه ابری' },
      { day: 'چهارشنبه', temp: 27, tempMin: 20, tempMax: 32, icon: '☀️', description: 'آفتابی' },
    ]
  },
  'رشت': {
    city: 'رشت',
    country: 'ایران',
    temp: 20,
    feelsLike: 21,
    tempMin: 16,
    tempMax: 24,
    humidity: 78,
    windSpeed: 6,
    windDirection: 'دریایی',
    pressure: 1016,
    visibility: 6,
    uvIndex: 4,
    description: 'بارانی',
    icon: '🌧️',
    sunrise: '۰۶:۱۰',
    sunset: '۲۰:۲۵',
    forecast: [
      { day: 'شنبه', temp: 19, tempMin: 15, tempMax: 23, icon: '🌧️', description: 'بارانی' },
      { day: 'یکشنبه', temp: 18, tempMin: 14, tempMax: 22, icon: '🌧️', description: 'بارانی' },
      { day: 'دوشنبه', temp: 20, tempMin: 16, tempMax: 24, icon: '🌦️', description: 'ابری بارانی' },
      { day: 'سه‌شنبه', temp: 21, tempMin: 17, tempMax: 25, icon: '⛅', description: 'نیمه ابری' },
      { day: 'چهارشنبه', temp: 22, tempMin: 18, tempMax: 26, icon: '⛅', description: 'نیمه ابری' },
    ]
  },
  'کیش': {
    city: 'کیش',
    country: 'ایران',
    temp: 38,
    feelsLike: 42,
    tempMin: 32,
    tempMax: 42,
    humidity: 65,
    windSpeed: 15,
    windDirection: 'جنوبی',
    pressure: 1008,
    visibility: 14,
    uvIndex: 10,
    description: 'بسیار گرم و مرطوب',
    icon: '🌞',
    sunrise: '۰۶:۳۰',
    sunset: '۲۰:۵۵',
    forecast: [
      { day: 'شنبه', temp: 39, tempMin: 33, tempMax: 43, icon: '🌞', description: 'بسیار گرم' },
      { day: 'یکشنبه', temp: 38, tempMin: 32, tempMax: 42, icon: '☀️', description: 'آفتابی' },
      { day: 'دوشنبه', temp: 37, tempMin: 31, tempMax: 41, icon: '☀️', description: 'آفتابی' },
      { day: 'سه‌شنبه', temp: 38, tempMin: 32, tempMax: 42, icon: '☀️', description: 'آفتابی' },
      { day: 'چهارشنبه', temp: 40, tempMin: 34, tempMax: 44, icon: '🌞', description: 'بسیار گرم' },
    ]
  },
}

export function getWeatherByCity(city: string): WeatherData | null {
  const normalizedCity = city.trim()
  if (weatherDatabase[normalizedCity]) {
    return weatherDatabase[normalizedCity]
  }
  return null
}

export function getAvailableCities(): string[] {
  return Object.keys(weatherDatabase)
}
