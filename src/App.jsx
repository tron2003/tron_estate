import React, { Profiler } from 'react'
import {BroswerRouter,Routes,Route} from "react-router-dom"
export default function App() {
  return (
  <BroswerRouter>
  <Routes>
< Route path="/" element={<home />}/>
< Route path="/about" element={<about />}/>
< Route path="/sign_in" element={<signin />}/>
< Route path="/sign_out" element={<signout />}/>
< Route path="/profile" element={<profile />}/>

  </Routes>
  </BroswerRouter>

  )
}
