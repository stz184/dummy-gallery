import './App.css';
import {useState} from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Alerts from './components/common/Alerts';
import Albums from './components/albums/Albums';
import Gallery from './components/gallery/Gallery';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Favorites from './components/favorites/Favorites';

function App() {
  const [alert, setAlert] = useState([]);

  return (
      <Router>
        <Header />
          <main className="flex-shrink-0">
            <div className="container">
              <Alerts alert={alert} />
              <Routes>
                <Route
                    exact
                    path='/'
                    element={<Albums setAlert={setAlert} />}
                />
                <Route
                    exact
                    path='/gallery/:id'
                    element={<Gallery setAlert={setAlert} />}
                />
                <Route
                    exact
                    path='/favorites'
                    element={<Favorites setAlert={setAlert} />}
                />
              </Routes>
            </div>
          </main>
        <Footer/>
      </Router>
  );
}

export default App;
