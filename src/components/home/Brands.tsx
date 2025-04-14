const brands = [
    {
        image: '/brands/logo/Apple-Logo.webp',
        alt: 'Apple',
    },
    {
        image: '/brands/logo/honor-logo.png',
        alt: 'Honor',
    },
    {
        image: '/brands/logo/huawei-logo.png',
        alt: 'Huawei',
    },
    {
        image: '/brands/logo/realme-logo.webp',
        alt: 'Realme',
    },
    {
        image: '/brands/logo/Samsung_Logo.webp',
        alt: 'Samsung',
    },
    {
        image: '/brands/logo/xiaomi-logo.webp',
        alt: 'Xiaomi',
    },
]
export const Brands = () => {
    return <div className='flex flex-col items-center gap-3 pt-16 pb-12'>

        <h2 className='font-bold text-2xl'>
            Marcas disponibles
        </h2>

        <p className="w2/3 text-center text-sm md:text-base">
            Tenemos lo mas moderno en tecnologia y los ultimos modelos
            de celulares disponibles
        </p>
        <div className="grid grid-cols-3 gap-6 mt-8 items-center md:grid-cols-6">
            {
                brands.map((brand, index) => (
                    <div key={index}>
                        <img
                            src={brand.image}
                            alt={brand.alt}
                            className='w-30 h-20 object-contain'
                        />
                    </div>
                ))
            }
        </div>
    </div>
};
