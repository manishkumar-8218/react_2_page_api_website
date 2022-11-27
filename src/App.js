import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom'
import Header from './component/header';
import ApiData from './component/apiData';
import Summary from './component/summary';
import Error from './component/error';

function App() {
  return (
    <div className="App">
    <div className=''>
      <Header/>
      </div>
      <Routes>
        <Route path='summary' element={<Summary/>}/>
        <Route path='/api' element={<ApiData/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>  
    </div>
  );
}

export default App;
