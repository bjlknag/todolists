const API = "acc9a9b7db39ce224607a270472bc4ec";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API}&units=metric`
    fetch(url).then(response => response.json().then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        
    }));
    /// fetch 함수는 실제 해당 url로 갈필요 없이, JS가 대신 url을 call 하도록 함
}

function onGeoError() {
    alert("N/A");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
