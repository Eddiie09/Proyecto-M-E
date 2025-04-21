export const AboutPage = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-4xl font-semibold tracking-tight mb-5">
        Nuestra empresa
      </h1>

      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVkaWZpY2lvJTIwZGUlMjBsYSUyMGVtcHJlc2F8ZW58MHx8MHx8fDA%3D" 
      alt="Imagen de fondo" 
      className='h-[500px] w-full object-cover'
      />

      <div className="flex flex-col gap-4 tracking-tight leading-7 text-sm font-medium text-slate-800">
        <p>
          CelularesBaratos es una tienda en línea dedicada a la venta de celulares,
          fundada en 2025. Nuestro objetivo es ofrecer a nuestros clientes
          la mejor calidad y precio del mercado.
        </p>

        <p>
          En CelularesBaratos nos esforzamos por brindar un excelente servicio al cliente.
          Nuestro equipo de atención está disponible para responder tus preguntas
          y ayudarte en lo que necesites.
        </p>

        <p>
          Aquí encontrarás una amplia variedad de celulares de las mejores marcas.
          Además, contamos con promociones y descuentos exclusivos para que puedas
          comprar tu celular al mejor precio.
        </p>

        <h2 className="text-3xl font-semibold tracking-tight mt-8 mb-4">
          ¡No esperes más y compra en CelularesBaratos!
        </h2>

        <p>
          Para más información, no dudes en ponerte en contacto con nosotros a través de nuestro correo electrónico:&nbsp;
          <a
            className="text-blue-600 underline"
            href="mailto:castanedagarciaedison@gmail.com"
          >
            castanedagarciaedison@gmail.com
          </a>{' '}
          o llamando al&nbsp;
          <a className="text-blue-600 underline" href="tel:3114951453">
            3114951453
          </a>.
        </p>
      </div>
    </div>
  );
};
