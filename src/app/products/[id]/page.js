// pages/product/[id].js
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import GalleryComponent from '../../components/GalleryCard';
import DataComponent from '../../components/DataComponent';
import { products } from '../../utils/productData';

const ProductPage = ({ params }) => {
    const product = products?.find((product) => product.id == params?.id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="w-full pt-12 h-screen flex items-center bg-[#F8F9FA;] justify-start flex-col">
            <header className="w-full bg-[#F8F9FA;]">
                <div className="w-[80%] mx-auto flex items-center justify-between">
                    <h1 className="cursor-pointer font-bold text-xl text-[#5E687C;]">
                        Batteries
                    </h1>
                    <Link href="/">
                        <div cldivssName="text-xl text-sm cursor-pointer text-[#5E687C;]">View all batteries</div>
                    </Link>
                </div>
            </header>
            <section className="w-full lg:w-[60%] mt-12 rounded-md flex bg-[#FFFFFF;] h-[80%]">
                <GalleryComponent product={product} />
                <DataComponent product={product} />
            </section>
        </div>
    );
};

export default ProductPage;
