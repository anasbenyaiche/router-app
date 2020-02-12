import React from 'react';
import Card from './productCard';

const products = [
    {
        id:0,
        src:"https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title:"Harley",
        subtitle:"amazing cycle",
        btn:"Buy now"
    },
    {
        id:1,
        src:"https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title:"Harley",
        subtitle:"amazing cycle",
        btn:"Buy now"
    },
    {
        id:2,
        src:"https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title:"Harley",
        subtitle:"amazing cycle",
        btn:"Buy now"
    },
    {
        id:3,
        src:"https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title:"Harley",
        subtitle:"amazing cycle",
        btn:"Buy now"
    },
    {
        id:4,
        src:"https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title:"Harley",
        subtitle:"amazing cycle",
        btn:"Buy now"
    },
    {
        id:5,
        src:"https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title:"Harley",
        subtitle:"amazing cycle",
        btn:"Buy now"
    },
    {
        id:6,
        src:"https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title:"Harley",
        subtitle:"amazing cycle",
        btn:"Buy now"
    }

]


const Product = (props) => (
  <div className="productWrapper">
   <h1>This is the product page</h1>
        <div>
            {products.map((element,index)=> <Card
                src={element.src}
                to={`/product/${element.id}`}
                title={element.title}
                subtitle={element.subtitle}
                btn={element.btn}

            />
            )}
        </div>
  </div>
);

export default Product;
