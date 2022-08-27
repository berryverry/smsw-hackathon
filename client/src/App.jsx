import './styles/global.scss';
import Navbar from './components/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import Register from './pages/Register';
import IndexPage from './pages/Index';
import AuthProvider from './components/AuthProvider';

const App = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
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
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
