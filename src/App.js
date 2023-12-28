import './App.css';
import AboutUs from './Pages/AboutUs';
import BasicCard from './Pages/BasicCard';

import DrawerAppBar from './Pages/Demo';
import Demo from './Pages/Demo';
import Main from './Pages/Main';
import MainC from './Pages/MainC';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import StickyFooter from './Pages/StickyFooter';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainJava from './Pages/MainJava';


function App() {
  return (
    <div className="App">
{/* <BasicCard/> */}
         <BrowserRouter>
      <Routes>
        <Route index element={<Demo/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/home' element={<Demo/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/main' element={<Main/>  }/>
        <Route path='/c' element={<MainC/>  }/>
        <Route path='/java' element={<MainJava/>  }/>
      </Routes>
      
      
      
      </BrowserRouter>   
     
{/* <Demo/> */}
{/* <SignIn/> */}
 {/* <MainC/>    */}

    </div>
  );
}

export default App;
