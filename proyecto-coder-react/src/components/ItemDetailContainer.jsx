import { useEffect ,useState } from "react";
import { getProduct} from '../../Productos';
import { useParams } from "react-router-dom";


export default function ProductDetail () {
    const {id} = useParams();
    const [product, setProduct]= useState(null);

    useEffect(()=> {
        const result =getProduct(id);
        setProduct(result);
    }, [id]);

    if (!product) {
        return <h2>Cargando producto...</h2>
    }


    return(
        <>
        <h1>Detalle del producto {product.id}</h1>
        <h3>Nombre: {product?.title}</h3>
        <img src={product?.image} alt={product.title} />
        <p>Descripcion: {product?.description}</p>
        <p>Categoria: {product?.category}</p>
        <p>Precio ${product?.price}</p>
        </>
    )
    
}