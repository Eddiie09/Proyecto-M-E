import { Link } from "react-router-dom"
export const Banner = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/*IMAGEN */}
      <div className="absolute inset-0 bg-cover bg-center opacity-70 h-full"
        style={{ backgroundImage: 'url(/img/img-banner.jpg)' }}
      />

      {/*OVERLAY */}
      <div className="absolute inset-0 bg-black opacity-50" />

      { /* CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center lg:py-40 lg:px-8">
        <h1 className="text-4x1 font-bold mb-4 lg:text-6x1">
          Los mejores celulares 2025
        </h1>
        <p className="text-lg mb-8 lg:text-2x1">
          Descubre las mejores ofertas exclusivas y las ultimas novedades el celulares
        </p>
        <Link
          to='/celulares'
          className="bg-gray-900 hover:bg-gray-950 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
         ease-in-out>
          Ver celulares
        </Link>

      </div>
    </div>
  )
}
