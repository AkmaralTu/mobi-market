import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Register from './components/register/Register';
import MainPage from './pages/main/MainPage';
import ProfilePage from './pages/profile/ProfilePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
