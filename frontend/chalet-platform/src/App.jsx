import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import TerrainDetail from './pages/TerrainDetail/TerrainDetail'
import Terrains from './pages/Terrains/Terrains'
import ChaletModels from './pages/ChaletModels/ChaletModels'
import Options from './pages/Options/Options'
import BuildYourOwn from './pages/BuildYourOwn/BuildYourOwn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terrains" element={<Terrains />} />
        <Route path="/terrains/:id" element={<TerrainDetail />} />
        <Route path="/chalet-models" element={<ChaletModels />} />
        <Route path="/options" element={<Options />} />
        <Route path="/build-your-own" element={<BuildYourOwn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App