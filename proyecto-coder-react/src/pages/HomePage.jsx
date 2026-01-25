import bannerImg from '../assets/gym-banner.jpg';
import '../Style/Style.css';
import { getProducts } from '../services/products';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';

function HomePage() {

  const greeting = "Bienvenidos";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  getProducts().then((response) => {
    setProducts(response);
    setLoading(false);
  });
}, []);
{loading ? (
  <h2>Cargando productos...</h2>
) : (
  <div className="products-grid">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
)}

  return (
    <main className="containerBanner">
      <div className='banner'>
        <div className='banner-text'>
          <h1>{greeting}</h1>
          <p>La mejor indumentaria y suplementos deportivos para tu día a día.</p>
          <button className='btn-primary'>Comprar ahora</button>
        </div>
        <img className='banner-img' src={bannerImg} alt="banner"/>
      </div>

      <section className='products-section'>
        <h3>Todos los productos</h3>
        <div className='products-grid'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
