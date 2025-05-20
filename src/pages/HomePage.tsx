import { Brands } from "../components/home/Brands";
import { FeatureGrid } from "../components/home/FeatureGird";
import { ProductGrid } from "../components/home/ProductGrid";
import { ProductGridSkeleton } from "../components/skeletons/ProductGridSkeleton";
import { prepareProducts } from "../helpers";
import { useHomeProducts } from "../hooks/useHomeProducts";

export const HomePage = () => {
  const { RecentProducts, PopularProducts, isLoading } = useHomeProducts();

  const preparedRecentProducts = prepareProducts(RecentProducts);
  const preparedPopularProducts = prepareProducts(PopularProducts);

  return (
    <div>
      <FeatureGrid />

      {isLoading ? (
        <ProductGridSkeleton numberOfProducts={4} />
      ) : (
        <ProductGrid
          title="Productos Destacados"
          products={preparedPopularProducts}
        />
      )}

      {isLoading ? (
        <ProductGridSkeleton numberOfProducts={4} />
      ) : (
        <ProductGrid
          title="Nuevos Productos"
          products={preparedRecentProducts}
        />
      )}

      <Brands />
    </div>
  );
};
