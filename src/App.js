
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/authentication pages/Login';
import Register from './pages/authentication pages/Register';
import ForgotPassword from './pages/authentication pages/ForgotPassword';
import Charts from './pages/Charts';
import Tables from './pages/Tables';
import StaticNavigation from './pages/layout pages/StaticNavigation';
import LightSidenav from './pages/layout pages/LightSidenav';
import Page_401 from './pages/error pages/401';
import Page_404 from './pages/error pages/404';
import Page_500 from './pages/error pages/500';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/401' element={<Page_401/>} />
        <Route path='/404' element={<Page_404/>} />
        <Route path='/500' element={<Page_500/>} />
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Dashboard/>} />
          <Route path='charts' element={<Charts />} />
          <Route path='tables' element={<Tables />} />
          <Route path='static-navigation' element={<StaticNavigation />} />
          <Route path='light-sidenav' element={<LightSidenav />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
