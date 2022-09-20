

import {BrowserRouter  as  Router,Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Error404 from './pages/Error404';
import Header from './components/Header/Header';


function App() {
  return (
    <div>    


    <Router>
    <Header></Header>
     <Routes>
         <Route path="/"  exact element={<Home/>}/>
          <Route path='/inicio' exact element={<Home/>}/>
          <Route path='/series' exact element={<Series/>}/>
          <Route path='/comics' exact element={<Comics/>}/>
          <Route path='/*' exact element={<Error404/>}/>
       
       </Routes>

      </Router>
    </div>

  );
}

export default App;
