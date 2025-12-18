import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory } from '../../Productos';
import ProductCard from '../components/ItemListContainer';

export default function CategoryView() {
  const { categoryId } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    getCategory(categoryId).then((response) => setCategoryProducts(response));
  }, [categoryId]);

  return (
    <>
      <h1>Categoria {categoryId}</h1>
      {categoryProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
