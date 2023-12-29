import './App.css';
import AboutUs from './Pages/AboutUs';
import BasicCard from './Pages/BasicCard';
import MainJavaScript from './Pages/MainJavaScript';
import DrawerAppBar from './Pages/Demo';
import Demo from './Pages/Demo';
import Main from './Pages/Main';
import MainC from './Pages/MainC';
import MainJava from './Pages/MainJava';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import StickyFooter from './Pages/StickyFooter';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainCplus from './Pages/MainCplus';
import MainPython from './Pages/MainPython';


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
        <Route path='/js' element={<MainJavaScript/>  }/>
        <Route path='/cplus' element={<MainCplus/>  }/>
        <Route path='/python' element={<MainPython/>  }/>

      </Routes>
      
      
      
      </BrowserRouter>   
     
{/* <Demo/> */}
{/* <SignIn/> */}
 {/* <MainC/>    */}

    </div>
  );
}

export default App;














          // image="data:image/jpeg;base64,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"
