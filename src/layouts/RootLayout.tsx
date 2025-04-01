import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/shared/Navbar';

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Contenido dinámico de cada página */}
      <main className="container my-8 flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4">
        © 2025 - Mi Sitio Web
      </footer>
    </div>
  );
};

