import './App.css';
import React, {useEffect, useState} from 'react';
import PromiseTest from './component/PromiseTest';
import WeatherApp from './component/WeatherApp';

export default function App() {
  
  return (

    <div className="App">

      <PromiseTest />

      <WeatherApp />

    </div>
  );
}