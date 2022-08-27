import './styles/global.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import Register from './pages/Register';
import IndexPage from './pages/Index';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<Register />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;
