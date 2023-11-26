import {Routes , Route} from "react-router-dom"
import './App.css'
import LayoutUser from "./layout/User"
import Home from "./pages/home"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutUser/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
