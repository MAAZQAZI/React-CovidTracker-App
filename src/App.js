import React from 'react'
import './App.css';
import Covid from './components/covid';

export const App = () => {
  return (
    <div className='app'>
    <h1>🔴 Live </h1>
    <h2>Covid-19 </h2>
    <Covid/>
    </div>
  )
}
