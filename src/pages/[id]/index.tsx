import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const product = await fetch(`http://cuisinar.sharray.io/api/v1/items/${id}`);
  const business = await fetch("http://cuisinar.sharray.io/api/v1/business");
  const productData = await product.json();
  const businessData = await business.json();
  return {
    props: {
      product: productData.data,
      business: businessData.data,
    },
  };
};

export default function Product({ product, business }) {
  return (
    <div>
      <img
        alt={product.title}
        src={`http://om.sharray.io:8899/${product.image}`}
      />
      <p
        className="text-7xl"
        style={{
          color: business[0].mainColor,
        }}
      >
        Price: {product.price}
      </p>
      <p>Brand: {product.brand}</p>
      <p>description: {product.description}</p>
    </div>
  );
}
