import { Outlet } from 'react-router-dom';

// components
import Footer from 'components/Footer';
import Header from 'components/Header';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
