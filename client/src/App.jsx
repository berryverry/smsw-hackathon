import './styles/global.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<h1>Index</h1>} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;
