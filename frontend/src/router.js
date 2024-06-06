import ReactDOM from 'react-dom'
import * as React from 'react'
import { BrowserRouter,Routes, Route  } from 'react-router-dom'
import Index from './page/index'
function Router() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  </BrowserRouter>
}
export default Router;
