import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex items-center py-5 px-4">
        <Link href="/" className="text-3xl font-bold text-primay-blue mr-8">PetStore</Link>

        <ul className="flex flex-grow justify-center space-x-8">
          <li><Link href="/" className="text-lg text-gray-700 hover:text-shiba-yellow">Home</Link></li>
          <li><Link href="/products" className="text-lg text-gray-700 hover:text-shiba-yellow">Products</Link></li>
          <li><Link href="/doge" className="text-lg text-gray-700 hover:text-shiba-yellow">Dog</Link></li>
          <li><Link href="/cat" className="text-lg text-gray-700 hover:text-shiba-yellow">Cat</Link></li>
        </ul>
        <Link href="/login" className="text-lg text-gray-700 hover:text-shiba-yellow">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;