import { createContext, useContext } from "react";

interface Product {
  item_uuid: string;
  buid: string;
  title: string;
  price: number;
  brand: string;
  collection: string;
  units: string;
  barcode: string;
  description: string;
  image: string;
}
interface BusinessInfo {
  buid: string;
  title_ar: string;
  title_en: string;
  email: string;
  phone: string;
  address: string;
  description_ar: string;
  description_en: string;
  instructions: string;
  mainColor: string;
  secColor: string;
  textColor: string;
  logo: string;
}
export async function getServerSideProps() {
  const product = await fetch("http://cuisinar.sharray.io/api/v1/items");
  const business = await fetch("http://cuisinar.sharray.io/api/v1/business");
  const productData = await product.json();
  const businessData = await business.json();
  return {
    props: {
      products: productData.data,
      business: businessData.data,
    },
  };
}

const useProductController = (products: Product[], business: BusinessInfo) => {
  return {
    products: products,
    business: business,
  };
};

const ProductContext = createContext<ReturnType<typeof useProductController>>({
  products: [],
  business: null,
});

export const ProductProvider = ({ products, business, children }) => (
  <ProductContext.Provider value={useProductController(products, business)}>
    {children}
  </ProductContext.Provider>
);

export const useProduct = () => useContext(ProductContext);
