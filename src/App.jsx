import { Navbar } from '@/layout/Navbar'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { Testimonials } from '@/sections/Testimonials'
import { Contact } from '@/sections/Contact'
// import { useState } from 'react'
// import { ProductList } from '@/components/ProductList';
// import { changeOrderByPrice } from '@/helper/changeOrderByPrice'

// const initialProducts = [
//   {
//     id: 1,
//     name: "Soja Texturizada",
//     price: 30,
//   },
//   {
//     id: 2,
//     name: "Tempeh",
//     price: 15,
//   },
//   {
//     id: 3,
//     name: "Tofu",
//     price: 25
//   }
// ]

function App() {
  // codigo para testing
  // const [products, setProducts] = useState(initialProducts);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      {/* <ProductList items={products} />
      <button
        onClick={() => setProducts(changeOrderByPrice(products))}
      >
        Order by Price
      </button> */}
    </div>
  )
}

export default App
