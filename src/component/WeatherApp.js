import React, {useState, useEffect} from "react";

export default function WeatherApp() {
    const [temp, setTemp] = useState('');
    const [desc, setDesc] = useState('');
    const [icon, setIcon] = useState('');
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        fetchWeatherData();
    }, []);

    // 날씨 정보를 조회해오는 함수
    // 온도는 켈빈(K) 단위로 표시, 293.53K 이면 약 20.38도 섭씨(C)에 해당
    // moderate rain : 중간비
    const fetchWeatherData = () => {
    const apiKey = 'cf642bcd58c8a43583ef1bad5189463b';
    const city = 'Seoul';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const weatherIcon = data.weather[0].icon;

        setTemp(temperature);
        setDesc(description);
        setIcon(weatherIcon);
        setIsReady(true);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  };

  return (
    <div>
      <h1>Weather Information</h1>
      {isReady ? (
        <div>
          <p>Temperature: {temp} K</p>
          <p>Description: {desc}</p>
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}