//DOM selectors
const backgroundColor = document.getElementById('background-color')
const weatherContainer = document.getElementById('weather-container')
const sun = document.getElementById('sun')
const icons = document.getElementById('image-container')
const cityContainer = document.getElementById('city-container')
const forecastContainer = document.getElementById('forecast-container')
const errorDiv = document.getElementById('error')

const dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

//Fetching the API
const fetchWeather = () => {
	fetch(
		'https://api.openweathermap.org/data/2.5/weather?q=Umea,Sweden&units=metric&APPID=1e48fdf267ccc8ee33c1c78150dcbab1'
	)
		.then((response) => response.json())
		.then((data) => {
			updateHtml(data)
		})
		.catch((error) => console.log(error))
}
fetchWeather()

//Function to get data to HTML
const updateHtml = (data) => {
	const weather = data.weather[0].main
	const cityName = data.name
	const temp = data.main.temp.toFixed(1)
	const rise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	})
	const set = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	})
	weatherContainer.innerHTML = `${weather} | ${temp}°C <p>Sunrise ${rise}</p><p>Sunset ${set}</p>`

	weatherStyle(weather, cityName)
}

//Function that changes background/text-color depending on weather.
//ev lägga till färger för vinter?
const weatherStyle = (weather, cityName) => {
	if (weather === 'Clear') {
		cityContainer.innerHTML += `<img src="/images/noun_Sunglasses_2055147.svg" alt="sunglasses"/><h1>Get your sunnies on! ${cityName} is looking rather great today!</h1>`
		document.body.style.backgroundColor = '#f7e9b9'
		document.body.style.color = '#2a5510'
	} else if (weather === 'Clouds' || weather === 'Mist') {
		cityContainer.innerHTML = `<img src="/images/noun_Cloud_1188486.svg" alt="cloud"/><h1>Light a fire and get cozy. ${cityName} is looking grey today.</h1>`
		document.body.style.backgroundColor = '#f4f7f8'
		document.body.style.color = '#f47775'
	} else if (weather === 'Rain') {
		cityContainer.innerHTML = `<img src="/images/noun_Umbrella_2030530.svg" alt="umbrella"/><h1>Don't forget your umbrella. It's wet in ${cityName} today.</h1>`
		document.body.style.backgroundColor = '#a3def7'
		document.body.style.color = '#164a68'
	}
}

//--------------------------------

//Fetching the API FORECAST
const fetchForecast = () => {
	fetch(
		'https://api.openweathermap.org/data/2.5/forecast?q=Umea,Sweden&units=metric&APPID=1e48fdf267ccc8ee33c1c78150dcbab1'
	)
		.then((response) => response.json())
		.then((data) => {
			updateForecast(data)
		})
	}
fetchForecast()

const updateForecast = ( weekDay, weekTemp) => {
	forecastContainer.innerHTML += `<div class ="weekday-list"><p>${weekDay}</p></div> <div class ="temp-list"><p>${weekTemp} °C</p></div>`
	console.log(forecastContainer.innerHTML)

	filterForecast(weekDay, weekTemp)
}
updateForecast(data)


const filterForecast = () => {
filterForecast.forEach((day) => {
	const weekDay = new Date(day.dt * 1000)
	const weekTemp = day.main.temp.toFixed()
})
}
filterForecast()


