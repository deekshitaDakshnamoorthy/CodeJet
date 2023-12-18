import './App.css';
import DrawerAppBar from './Pages/Demo';
import Demo from './Pages/Demo';
import SignIn from './Pages/SignIn';
import StickyFooter from './Pages/StickyFooter';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route index element={<Demo/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/home' element={<Demo/>}/>

      </Routes>
      
      
      
      
      </BrowserRouter>
     
{/* <Demo/> */}
{/* <SignIn/> */}

    </div>
  );
}

export default App;
