import { BrowserRouter, Route,Routes} from 'react-router-dom';
import App_Forum from './page/forum'
import Tag_select from './components/tag_select';
import Info_list from './components/info_list'
function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<About/>}></Route>
    <Route path='/forum' element={<App_Forum/>}></Route>
  </Routes>
  </BrowserRouter>);
}
function Home() {
  return (<div>欢迎来到首页！</div>);
}

function About() {
  return (<div>关于我们的页面。</div>);
}
export default App