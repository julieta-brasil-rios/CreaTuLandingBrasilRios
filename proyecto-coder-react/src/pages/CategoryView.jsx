import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory } from '../services/products';
import ProductCard from '../components/ProductCard';
import ItemList from '../components/ItemList';

export default function CategoryView() {
  const { categoryId } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    getCategory(categoryId).then((response) => setCategoryProducts(response));
  }, [categoryId]);

  return (
    <>
      <h1>Categoria {categoryId}</h1>
      <ItemList products={categoryProducts}/>
    </>
  );
}
