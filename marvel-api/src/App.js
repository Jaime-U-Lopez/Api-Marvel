

import {BrowserRouter  as  Router,Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Error404 from './pages/Error404';

function App() {
  return (
    <div>    

    <Router>
  
     <Routes>
          <Route  path='/' exact component={()=><Home/>}/>
          <Route path='/inicio' exact component={()=> <Home/>}/>
          <Route path='/series' exact component={()=> <Series/>}/>
          <Route path='/comics' exact component={()=> <Comics/>}/>
          <Route component ={() =><Error404/>  }/>
       </Routes>

      </Router>
    </div>

  );
}

export default App;
