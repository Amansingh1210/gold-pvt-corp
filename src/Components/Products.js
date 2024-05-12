import React from 'react'
import products from '../Data/products'

function Products() {
  return (
    <main className='container my-5'>
      <p className='text-center fs-1'>Our Featured Product</p>
      <div className="container underline my-5"></div>
      <div className='row gap-5 mx-auto'>
          {products.map((banner)=>{
            const { id, name, desc, url, capacity } = banner
           return <div key={id} className="card col-md-3">
             <button className="cap-btn btn-primary">{capacity}</button>
              <img src={url} className="card-img-top mt-3" alt="..."/>
                  <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{desc}</p>
                      <button href='#' className="button">Read more</button>
                  </div>
          </div>
          })};
      </div>
    </main>
  )
}

export default Products