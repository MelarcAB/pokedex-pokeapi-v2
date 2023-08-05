import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import PokedexList from './views/PokedexList'
import PokedexDetail from './views/PokedexDetail'
import './App.css'

function App() {
  return (
    <AppContent />
  )
}

function AppContent() {
  return (
    <div className="w-full mx-auto overflow-auto">
      <Router>
        <Routes>
          <Route exact path="/" element={<PokedexList />} />
          <Route exact path="/pokemon/:name" element={<PokedexDetail />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App
