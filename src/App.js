import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Info from './Info';
import AddData from './AddData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditData from './EditTask';
function App() {
  return (
    <div className="App">
     <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Info/>}/>
      <Route path='/addTask' element={<AddData/>}/>
      <Route path='/editTask/:id' element={<EditData/>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </div>
  );
}

export default App;
