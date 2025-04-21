import { color, product, VariantProduct } from "../interfaces";


// Función para formatear el precio a dolares
export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);
}

// Función para preparar los productos - (Celulares)
export const prepareProducts = (products: product[]) => {
    return products.map((product: product) => {
        // Agrupar las variantes por color
        const colors = product.variants.reduce((acc: color[], variant: VariantProduct) => {
            const existingColor = acc.find(item => item.color === variant.color);

            if (existingColor) {
                // Si ya existe el color, comparamos los precios
                existingColor.price = Math.min(existingColor.price, variant.price);
            } else {
                acc.push({
                    color: variant.color,
                    price: variant.price,
                    name: variant.color_name,
                });
            }

            return acc;
        }, []);

        // OBTENER EL PRECIO MAS BAJO DE LAS VARIANTES AGRUPADAS
        const price = Math.min(...colors.map(item => item.price));

        //DEVOLVER EL PRODUCTO FORMATEADO
        return {
            ...product,
            price,
            colors: colors.map(({ name, color}) => ({ name, color })),
        }
    });
};
