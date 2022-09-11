import React from 'react'
import Login from './components/auth/Login'
import Dashbord from './components/dashboard/Dashbord'
import Restaraunt from './components/restaraunt/Restaurant'
import Temples from './components/temples/Temples'
import Supermarket from './components/supermarket/Supermarket'
import Chargestation from './components/chargestation/Chargestation'

import { BrowserRouter , Route , Routes } from "react-router-dom"


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route  exact path='/' element={<Dashbord />} />
          <Route path='/login' element={ <Login /> } />
          <Route path="/restaurant" element= {<Restaraunt /> } />
          <Route path='/temples' element = {<Temples/>}/>
          <Route path='/supermarket' element = {<Supermarket/>}/>
          <Route path='/chargestation' element = {<Chargestation/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default App