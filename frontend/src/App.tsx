import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4">
        <h1 className="text-2xl font-bold">Welcome to the Event Management System</h1>
        <p className="mt-2 text-gray-600">Manage your events and orders efficiently.</p>
      </div>
    </>
  )
}

export default App
