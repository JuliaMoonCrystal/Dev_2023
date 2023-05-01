import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/estaticos/navBar/NavBar';
import Home from './components/home/Home'
import Character from './components/characters/characters';
import ListCards from './components/listCards/ListCards';

function App() {
  return (
    <div>
      < BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} >
          </Route>
          <Route path='/listCards' element={<ListCards />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
