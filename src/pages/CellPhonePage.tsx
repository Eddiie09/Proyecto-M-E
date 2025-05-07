import { CardProduct } from "../components/products/CardProduct";
import { prepareProducts } from "../helpers";
import { ContainerFilter } from "../components/products/ContainerFilter";
import { useFilteredProducts } from "../hooks/index";
import { useState } from "react";

export default function CellPhonePage() {
  const [page, setPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  console.log("Desde CellPhonePage:", { page, selectedBrands });

  const {
    data: products = [],
    isLoading,
    totalProducts,
  } = useFilteredProducts({
    page,
    brands: selectedBrands,
  });

  const preparedProducts = prepareProducts(products);

  if (!isLoading && products.length === 0) {
    return <p className="text-center text-xl">No se encontraron productos.</p>;
  }

  return (
    <>
      <h1 className="text-5xl font-semibold text-center mb-12">celulares</h1>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {/*FILTROS */}
        <ContainerFilter
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />

        {isLoading ? (
          <div className="col-span flex items-center justify-center h-[500px]">
            <p className="text-2xl">Cargando...</p>
          </div>
        ) : (
          <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex flex-col gap-12">
            <div className="grid grid-cols-2 gap-3 gap-y-10 xl:grid-cols-4">
              {preparedProducts.map((product) => (
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
            {/* TODO: Paginacion */}
          </div>
        )}
      </div>
    </>
  );
}
