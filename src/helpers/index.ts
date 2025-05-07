import { color, product, VariantProduct } from "../interfaces";

// Función para formatear el precio a dólares
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

// Función para preparar los productos - (Celulares)
export const prepareProducts = (products: product[] = []) => {
  return products.map((product: product) => {
    const variants = Array.isArray(product.variants) ? product.variants : [];

    const colors = variants.reduce((acc: color[], variant: VariantProduct) => {
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

    const price = colors.length > 0 ? Math.min(...colors.map(item => item.price)) : 0;

    return {
      ...product,
      price,
      colors: colors.map(({ name, color }) => ({ name, color })),
    }
  });
};
