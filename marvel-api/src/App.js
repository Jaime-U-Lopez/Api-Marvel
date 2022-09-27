

import {BrowserRouter  as  Router,Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Error404 from './pages/Error404';
import Header from './components/Header/Header';
import useFetch from './components/Api_Hook/UseFetch';


function App() {

  const  exampleApi =useFetch(

    'http://gateway.marvel.com/v1/public/events?ts=1&apikey=b4dd4282e1b25f7c72aa3cba77ab4ce4&hash=4232dd5bcab38413ba6d13fd93d1ec65'

  )

  console.log("array de elementos ")

  console.log(exampleApi)


  
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
