const searchBtn=document.querySelector('#searchBtn')
const inputBox=document.querySelector('.input-box')
const weather_Img=document.querySelector('.weather-img')
const temp=document.querySelector('.temperature')
const description=document.querySelector('.desc')
const humidity=document.querySelector('#humidityData')
const windSpeed=document.querySelector('#windSpeed ')
const errorShow=document.querySelector('.error')
const weatherBody=document.querySelector('.weather-body')
const searchBox = document.querySelector('.search-box')




async function checkWeather(city){
 try{
const apiKey="34a329e546af1efcc0823c77bf38713d"
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
const weatherData= await fetch(`${url}`);
const responce=await weatherData.json();

// weatherBody.style.display='flex' 
// errorShow.style.display='none'

weatherBody.classList.remove('hide')  
errorShow.classList.remove('show')

console.log(responce)
temp.innerHTML=`${Math.round(responce.main.temp-273.15)}°C`
description.innerHTML=`${responce.weather[0].description}`
humidity.innerHTML=`${responce.main.humidity}%`
windSpeed.innerHTML=`${responce.wind.speed}km/H`

switch(responce.weather[0].main){
    case  'Clouds':
    weather_Img.src="/assets/cloud.png"
    break;
    case  'Haze':
    weather_Img.src="/assets/cloud.png"
    break;

    case  'Clear':
    weather_Img.src="/assets/clear.png"
    break;

    case  'Rain':
    weather_Img.src="/assets/rain.png"
    break;

    case  'Mist':
    weather_Img.src="/assets/mist.png"
    break;

    case  'Smoke':
    weather_Img.src="./assets/smoke1.jpg"
    break;
    case  'Snow':
    weather_Img.src="./assets/snow.jpg"
    break;
}

 
}

catch{

    // weatherBody.style.display='none' 
    // errorShow.style.display='flex'

    weatherBody.classList.add('hide')  
    errorShow.classList.add('show')

      
}}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value)
});

searchBox.addEventListener('submit',(e)=>{
    e.preventDefault();
    let cityName = inputBox.value;

    if(cityName === ""){
        return;
    }
    else {
        checkWeather(cityName);
    }
    
    // let cityName=abc;
    // checkWeather(cityName)
})

