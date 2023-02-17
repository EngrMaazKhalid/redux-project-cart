import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
const DUNNY_DATA =[
  {
  id:'p1',
  price: 6,
  title:"My first book",
  description:'This is my first Book'
},
  {
  id:'p2',
  price: 8,
  title:"My Second book",
  description:'This is my Second Book'
},
  {
  id:'p3',
  price: 7,
  title:"My Third book",
  description:'This is my Third Book'
},
  {
  id:'p4',
  price: 3,
  title:"My fourth book",
  description:'This is my fourth Book'
},
  {
  id:'p5',
  price: 9,
  title:"My fifth book",
  description:'This is my fifth Book'
}
]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUNNY_DATA.map(product =>(
 <ProductItem
 key={product.id}
 id={product.id}
 title={product.title}
 price={product.price}
 description={product.description}
/>
        ))}
       
      </ul>
    </section>
  );
};

export default Products;
