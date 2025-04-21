import { Container } from "postcss";
import { CardProduct } from "../components/products/CardProduct";
import { allCelulares } from "../data/initialData"
import { prepareProducts } from "../helpers"
import { ContainerFilter } from "../components/products/ContainerFilter";

export default function CellPhonePage() {

  const preparedProducts = prepareProducts(allCelulares);
  return <>
    <h1 className="text-5xl font-semibold text-center mb-12">
      celulares
    </h1>

    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {/*FILTROS */}
      <ContainerFilter />

      <div>Filtros</div>

      <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex flex-col gap-12">
        <div className="grid grid-cols-2 gap-3 gap-y-10 xl:grid-cols-4 ">
          {preparedProducts.map(product => (
            <CardProduct
              key={product.id}
              name={product.name}
              price={product.price}
              colors={product.colors}
              images={product.images}
              slug={product.slug}
              variants={product.variants}
            />
          ))}
        </div>
        {/*TODO: Paginacion*/}

      </div>
    </div>
  </>
};
