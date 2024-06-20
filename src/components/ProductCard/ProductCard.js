
import "./ProductCard.css";
import { Link } from "react-router-dom";
function ProductCard({id,title,price,content}) {
  return (

    <Link className="product-card" to={`/product/${id}`}>
     
  
        <h1  className="product-title">{title}</h1>
     
        <p  className="blog-content">{content.substring(0,50)}...</p>
        <h1  className="product-price">{price}</h1>
        <button className="card-btn"> View Details</button>

    </Link>
  )
}
export default ProductCard
