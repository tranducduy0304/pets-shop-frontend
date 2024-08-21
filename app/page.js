import Image from "next/image";
import Link from "next/link";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 text-primay-blue">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left side: Description and Button */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h3 className="text-3xl font-bold mb-4">Welcome to PetStore</h3>
          <p className="text-lg mb-6">
            Discover a wide range of high-quality pet products for your furry friends. 
            From nutritious food to fun toys, we have everything to keep your pets happy and healthy.
          </p>
          <Link href="/products" className="inline-block bg-shiba-yellow text-white font-bold py-3 px-6 rounded-lg border-2 border-shiba-yellow hover:bg-white hover:text-shiba-yellow transition duration-300">
            Shop Now
          </Link>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 h-full">
          <div className="relative w-full h-0 pb-[80%]">
            <Image
              src="/assets/shiba_home.png"
              alt="Happy Shiba Inu"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-left text-primay-blue">Our Products</h2>
        <ProductsPage/>
      </div>
    </div>
  );
}
