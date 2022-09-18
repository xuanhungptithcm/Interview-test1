import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import Layout from 'components/Layout';

// pages
const HomePage = lazy(() => import('pages/Home/Home'))
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
