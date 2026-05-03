import { ShoppingCart, Menu } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <button className="lg:hidden">
                <Menu className="w-6 h-6" />
              </button>
              <a href="#" className="text-sm hover:text-gray-600">About</a>
              <a href="#" className="text-sm hover:text-gray-600">Delivery</a>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-xl font-serif">Esencia & Aroma</h1>
            </div>

            <div className="flex items-center gap-8">
              <a href="#" className="text-sm hover:text-gray-600">Contact</a>
              <button className="relative">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&q=80')"}}></div>
        <div className="relative text-center z-10">
          <img  src="src/imports/no fondo ese and arom.png" alt="Esencia & Aroma Floristería"
             className="mb-8 w-64 sm:w-80 mx-auto"/>
          <button className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors">
            Collection
          </button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-serif">Nuestros <span className="text-red-600">Productos</span></h3>
            <button className="flex items-center gap-2 text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
              View All
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f1eb]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm tracking-widest uppercase text-gray-600">Signature Collection</span>
            <h3 className="text-4xl font-serif mt-4 mb-6">Girasol Radiante</h3>
            <p className="text-gray-700 mb-2">A dreamy blend of soft pinks, whites, and greens</p>
            <p className="text-gray-700 mb-6">Perfect for celebrations or a heartfelt gesture</p>
            <p className="text-2xl font-serif mb-8">$85.00</p>
            <button className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
              onClick={() => window.open("https://wa.me/51975838869", "_blank")}>
              Cotización
            </button>
          </div>
          <div className="relative aspect-square">
            <img
              src="src/imports/girasol.png"
              alt="Girasol Radiante"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative aspect-square">
            <img
              src="src/imports/rosa rosa.png"
              alt="Wild Foraged Beauties"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-sm tracking-widest uppercase text-gray-600">Wild & Free</span>
            <h3 className="text-4xl font-serif mt-4 mb-6">Wild Foraged Beauties</h3>
            <p className="text-gray-700 mb-2">Hand-picked seasonal blooms in vibrant colors</p>
            <p className="text-gray-700 mb-6">Each arrangement is truly one-of-a-kind</p>
            <p className="text-2xl font-serif mb-8">$95.00</p>
            <button className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
              onClick={() => window.open("https://wa.me/51975838869", "_blank")}>
              Cotización
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fff5f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm tracking-widest uppercase text-gray-600">Elegant & Timeless</span>
            <h3 className="text-4xl font-serif mt-4 mb-6">Classic White Hydrangeas</h3>
            <p className="text-gray-700 mb-2">Pure elegance in pristine white petals</p>
            <p className="text-gray-700 mb-6">A sophisticated choice for any occasion</p>
            <p className="text-2xl font-serif mb-8">$110.00</p>
            <button className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
              onClick={() => window.open("https://wa.me/51975838869", "_blank")}>
              Cotización
            </button>
          </div>
          <div className="relative aspect-square">
            <img
              src="src/imports/rosas rojas 6.png"
              alt="Classic White Hydrangeas"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-purple-900"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1496080174650-637e3f22fa03?w=1600&q=80')"}}></div>
        <div className="relative max-w-4xl mx-auto text-center text-white z-10">
          <h3 className="text-5xl sm:text-6xl font-serif mb-6">Mire nuestro catálogo</h3>
          <p className="text-lg mb-4">Realizamos los pedidos a la puerta de tu casa</p>
          <p className="text-lg mb-8">Tenemos una increible colección de flores</p>
          <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-teal-900 transition-colors">
            Catalogo Completo
          </button>
        </div>
      </section>

      <footer className="bg-[#f5f1eb] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-serif text-xl mb-4">Esencia & Aroma</h4>
              <p className="text-sm text-gray-700">Traemos la belleza de la naturaleza a tus manos, transforma tu espacio con la magia de las flores. </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-700 hover:text-black">About Us</a></li>
                <li><a href="#" className="text-sm text-gray-700 hover:text-black">Shop</a></li>
                <li><a href="#" className="text-sm text-gray-700 hover:text-black">Delivery</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-700 hover:text-black">Contact</a></li>
                <li><a href="#" className="text-sm text-gray-700 hover:text-black">FAQ</a></li>
                <li><a href="#" className="text-sm text-gray-700 hover:text-black">Returns</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-700 hover:text-black">Instagram</a></li>
                <li><a href="#" className="text-sm text-gray-700 hover:text-black">Facebook</a></li>
                <li><a href="#" className="text-sm text-gray-700 hover:text-black">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-8 text-center">
            <p className="text-sm text-gray-600">Make by Walter Rodriguez for © 2026 Esencia & Aroma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}