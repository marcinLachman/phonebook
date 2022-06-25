import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './pages/Navigation';
import Home from './pages/Home';
import AddUsers from './pages/AddUsers';
import Update from './pages/Update';
import Delete from './pages/Delete';
import Footer from './pages/Footer';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <div className='App'>
      <Router>

        <Navigation />

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/update/:user' element={ <Update /> } />
          <Route path='/addusers' element={ <AddUsers /> } />
          <Route path='/delete' element={ <Delete /> } />
          <Route path='*' element={ <ErrorPage /> } />
        </Routes>

        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
