import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/buscador" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
