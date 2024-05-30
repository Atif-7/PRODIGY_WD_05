const form = document.querySelector('form');
const cityName = document.querySelector('#search');
const nameOutput = document.querySelector('#cityName h2');
const image = document.querySelector('.img');
const temprature = document.querySelector('.temp h2');
const weather = document.querySelector('.temp p');

const apiKey =`e898841b4eff355b330fb471445cd1eb`;

const getWeather = async(city) => {
    nameOutput.innerHTML = "Loading..."
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    return showWeather(data);
}

const showWeather = (data) => {
    console.log(data)
    if (data.cod == "404") {
        nameOutput.innerHTML = "city not found";
        return;
    }

    nameOutput.innerHTML = cityName.value;
    image.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>`;
    temprature.innerHTML = `${data.main.temp}°C`;
    weather.innerHTML = `${data.weather[0].main}`
}

form.addEventListener("submit",function (e) {
    e.preventDefault();
    getWeather(cityName.value);
    if (cityName.value == "") {
        alert("Please Enter a City Name")
    }else{
        console.log(cityName.value)
        return showWeather();
    }
})