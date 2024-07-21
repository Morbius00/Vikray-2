// pages/productdetails/[id].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import productData from '../../../data/productdata.json';
import { useRouter } from 'next/router';
// import ProductBody from '@/components/Productdetails_component/ProductBody'; // Import your ProductBody component

interface ProductDetailsProps {
  productDetail: {
    id: number;
    name: string;
    company: string;
    price: string;
    poster: string;
    model: string;
    placement: string;
    hotspots: {
      id: number;
      name: string;
      position: string;
      normal: string;
    }[];
  } | null;
}

const ProductDetails = ({ productDetail }: ProductDetailsProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!productDetail) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {/* <ProductBody productDetail={productDetail} /> Pass the product details to ProductBody */}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = productData.map(product => ({
    params: { id: product.id.toString() }
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<ProductDetailsProps> = async (context) => {
  const { id } = context.params!;
  const productDetail = productData.find(product => product.id.toString() === id) || null;

  return {
    props: {
      productDetail
    },
    revalidate: 10 // Revalidate every 10 seconds
  };
};

export default ProductDetails;
