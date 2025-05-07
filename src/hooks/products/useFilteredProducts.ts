import { useQuery } from "@tanstack/react-query";
import { getFilteredProducts } from "../../actions"; // Ajusta esta ruta según corresponda

export const useFilteredProducts = ({ page, brands }: {
  page: number;
  brands: string[];
}) => {
  console.log("Hook recibe:", { page, brands });

  const { data, isLoading } = useQuery({
    queryKey: ['filteredProducts', page, brands],
    queryFn: () => { 
    console.log("Se ejecuta getFilteredProducts con:", { page, brands }); // 👈 aquí
    return getFilteredProducts({ page, brands });
    },
    retry: false,
    enabled: brands !== null

  });

  return {
    data: data?.products,
    isLoading,
    totalProducts: data?.total,
  };
};
