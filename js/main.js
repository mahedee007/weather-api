const apiKey = `f7d12c02609a85241bd2c12401740381
`;
const searchWeather = ()=>{
    const searchCity = document.getElementById('search-city');
    const searchinput = searchCity.value;
    if(searchCity.value === ''){
        alert('enter city name');

    }else{
       
        searchCity.value = '';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchinput}&appid=${apiKey}&units=metric`
        fetch(url)
        .then(res => res.json())
        .then(data => showWeather(data))
    }
   
    
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}


const showWeather = temperature => {
    if(temperature.name === undefined){
        alert('this is not a city name')
    }else{
        
        setInnerText('city-name',temperature.name);
        setInnerText('temp',temperature.main.temp);
        setInnerText('forcast',temperature.weather[0].main);
        
        const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
        document.getElementById('img-icon').setAttribute('src', url);
        
    }

}