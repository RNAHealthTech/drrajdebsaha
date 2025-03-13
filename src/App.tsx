import React from 'react';
import { Routes, useLocation, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home  from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import ServiceTemplate from './pages/ServiceTemplate';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])
}

const App: React.FC = () => {
  useScrollToTop();

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services/:slug' element={<ServiceTemplate />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Layout>
  )
}
export default App;
