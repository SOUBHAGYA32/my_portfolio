import {BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css';
import Layout from './Components/Layout';

//Pages
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import About from './Pages/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         
         <Routes>

               <Route path='/' element={<Home/>}/>
               <Route path='/projects' element={<Projects/>}/>
               <Route path='/courses' element={<Courses/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route path='/about' element={<About/>}/>

         </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
