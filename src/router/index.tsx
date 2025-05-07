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
        path: 'productos',  // Alias para celulares
        element: <CellPhonePage />
      },
      {
        path: 'nosotros',
        element: <AboutPage />
      },
      {
        path: 'contacto',
        element: <div>Contacto</div>
      }
    ]
  },
]);
