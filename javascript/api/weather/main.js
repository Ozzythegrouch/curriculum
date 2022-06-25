const button = document.querySelector('.btn');
const city = document.querySelector('.city-name');
const temp = document.querySelector('.temp');
const input = document.querySelector('.zip-input')


// An API call using .then
// const getWeather = () => {
//     const userZip = input.value

//     fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=40d9ab80951c548032ffba80bd777c61&units=imperial`)
//     .then(response => response.json())
//     .then (data => {
//         const cityName = data.name
//         city.innerText = cityName
//         const currentTemp = data.main.temp
//         temp.innerText = currentTemp

//     })
// }

const getWeather = async () => {
    const userZip = input.value

    const rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=40d9ab80951c548032ffba80bd777c61&units=imperial`)
    const data = await rawData.json()

    const cityName = data.name
    city.innerText = cityName
    const currentTemp = data.main.temp
    temp.innerText = currentTemp
}

button.addEventListener('click', getWeather)