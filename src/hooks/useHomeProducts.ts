import { useQueries } from "@tanstack/react-query";
import { getRecentProducts, getRandomProducts } from "../actions";

export const useHomeProducts = () => {
    const results = useQueries({
        queries: [
            {
                queryKey: ["recentProducts"],
                queryFn: getRecentProducts,
            },
            {
                queryKey: ["popularProducts"],
                queryFn: getRandomProducts,
            },
        ],
    });
    const [recentProductsResult, popularProductsResult] = results;

    //Combied the results consult
    const isLoading = recentProductsResult.isLoading || popularProductsResult.isLoading;
    const isError = recentProductsResult.isError || popularProductsResult.isError;
    return {
        RecentProducts: recentProductsResult.data || [],
        PopularProducts: popularProductsResult.data || [],
        isLoading,
        isError,

    };
}

