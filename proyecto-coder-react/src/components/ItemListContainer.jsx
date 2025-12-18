import '../Style/ProductCard.css';
import { Link } from 'react-router-dom';


export default function ProductCard({ product }) {
  return (
    <>
      <article className='box-card' >
        <div className='card'>
        <h4>
          {product.title} - {product.id}
        </h4>
        <img src={product.image} alt={product.title} />

        <p>${product.price}</p>

        <Link to={`/item/${product.id}`} className="btn-primary">
          Más detalles
        </Link>
        </div>
      </article>
    </>
  );
}
