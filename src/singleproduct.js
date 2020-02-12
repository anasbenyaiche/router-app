import React from 'react';


const SingleProduct = (props) => (
  <div className="HomeWrapper">
    <h1>this is the product number : {`${props.match.params.id}`} </h1>
  </div>
);

export default SingleProduct;
