import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage, AboutPage } from "../pages";
import CellPhonePage from "../pages/CellPhonePage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'celulares',
        element: <CellPhonePage />
      },
      {
        path: 'nosotros',
        element: <AboutPage />
      },
      {
        path: 'productos',
        element: <div>Página de Productos</div>
      },
      {
        path: 'contacto',  // <--- Agregamos esta línea
        element: <div>Contacto</div>  // <--- Puedes cambiar esto por tu componente de Contacto
      }
    ]
  },
]);
