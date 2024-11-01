import {api} from './.gitignore/api.js';
const apikey = api;
let form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let city = String(document.getElementById('search').value);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
    .then((response) => {return response.json()})
    .then((data) => {
        console.log(data);
        let temp =`${Math.round(data.main.temp)} °C`;
        let place = data.name;
        let humididty = `${data.main.humidity} %`;
        let wind = `${data.wind.speed} km/h`;
        document.getElementById('tem').innerText = temp;
        document.getElementById('place').innerText = place;
        document.getElementById('hum').innerText = humididty;
        document.getElementById('wind').innerText = wind;
    })
    .catch((error) => {console.log(error)})
});
