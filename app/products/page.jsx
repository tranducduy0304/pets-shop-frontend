import Link from "next/link";
import Image from "next/image";

const products = [
  { id: 1, name: "Dog Food", description: "Premium nutrition for your canine companion", image: "/assets/keo-nhai.webp" },
  { id: 2, name: "Cat Toy", description: "Interactive toy for feline fun", image: "/assets/sua-tam.webp" },
  { id: 3, name: "Pet Bed", description: "Cozy resting place for pets", image: "/assets/thit-ga.webp" },
  { id: 4, name: "Dog Leash", description: "Durable leash for daily walks", image: "/assets/sua-tam-tri-ghe.webp" },
  { id: 5, name: "Dog Food", description: "Premium nutrition for your canine companion", image: "/assets/keo-nhai.webp" },
  { id: 6, name: "Cat Toy", description: "Interactive toy for feline fun", image: "/assets/sua-tam.webp" },
  { id: 7, name: "Pet Bed", description: "Cozy resting place for pets", image: "/assets/thit-ga.webp" },
  { id: 8, name: "Dog Leash", description: "Durable leash for daily walks", image: "/assets/sua-tam-tri-ghe.webp" },
];


const ProductsPage = () => {
  return (
    <section className="mb-16">
        {/* <h2 className="text-3xl font-bold mb-8 text-left text-primay-blue">Our Products</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-20">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="bg-white rounded-lg  overflow-hidden h-full flex flex-col">
                <div className="relative w-full h-0 pb-[75%]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="p-4 flex-grow text-center">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
  )
}

export default ProductsPage
