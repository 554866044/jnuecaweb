import { BrowserRouter, Route,Routes} from 'react-router-dom';
import App_Forum from './page/forum'
import Index from './page';
import ManagementPage from './page/pageadmin';
import LoginPage from './page/login';
function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path='/' element={<Index/>}></Route>
    <Route path='/forum' element={<App_Forum/>}></Route>
    <Route path='/admin' element={<ManagementPage/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
  </Routes>
  </BrowserRouter>);
}
export default App