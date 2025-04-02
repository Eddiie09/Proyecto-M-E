
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { Banner } from '../components/shared/home/Banner';
import { Newsletter } from '../components/shared/home/Newsletter';

export const RootLayout = () => {

  const { pathname } = useLocation();

  return (
    <div className="flex flex-col min-h-screen font-montserrat">
      {/* Navbar */}
      <Navbar />

      {
        pathname === '/' && (
          <Banner />
        )
      }

      {/* Contenido dinámico de cada página */}
      <main className="container my-8 flex-1">
        <Outlet />
      </main>

      {
        pathname === '/' && (
         <Newsletter />
        )
      }

      {/* Footer */}
      <Footer className="bg-gray-200 text-center py-4">
        © 2025 - Mi Sitio Web
      </Footer>
    </div>
  );
};

