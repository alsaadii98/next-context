import "../styles/globals.css";
import { ProductProvider } from "@/store";

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider
      products={pageProps.products}
      business={pageProps.business}
    >
      <Component {...pageProps} />
    </ProductProvider>
  );
}

export default MyApp;
