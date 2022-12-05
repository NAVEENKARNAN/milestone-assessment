import logo from './logo.svg';
// import './App.css';
import{BrowserRouter,Routes,Route}from"react-router-dom";
import Index from"./components/index";
import Login from './components/login';
function App() {
  return (
    
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
       <Route path='/login' element={<Login/>} /> 
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
