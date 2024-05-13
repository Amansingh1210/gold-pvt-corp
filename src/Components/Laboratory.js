import React from 'react'
import {  useNavigate } from 'react-router-dom'
import  laboratory  from '../Data/laboratory';



function Laboratory({currentId}) {
    const nav = useNavigate();

    const filteredObject = laboratory.filter(obj => obj.id == currentId);
    console.log(filteredObject);
    return (
        <>
            {filteredObject.map((lab)=>{
        const {id,name,items} = lab
      return <main key={id} className='d-flex flex-column gap-4 '>
          <div className='fluid-contanier bg-dark text-center text-white py-5 px-5'>
              <div className='d-flex flex-row justify-content-between align-items-center '>
                  <div>
                      <h1 className='uppercase'>{name}</h1>
                  </div>
                  <nav>
                      <ol className="list-none d-flex gap-3 align-items-center cursor-pointer">
                          <li className="fs-4 text-hover" onClick={()=>nav('/')}>Home</li>
                          <li className="">/</li>
                          <li className="fs-4 text-hover ">{name}</li>
                      </ol>
                  </nav>
              </div>
              <div className="banner-underline"></div>
              <p className='text-start'>All you want know</p>
          </div>
          <div className='container'>
            <div >
                  <h1 className='uppercase'>{name}</h1>
                  <div className="underline my-4"></div>
            </div>
            <div className='laboratory-items row '>
                  {items.map((item)=>{
                    return <div key={item} className='col-md-4 my-3 '><p className='lab-item green'>{item}</p></div>
                  })}
            </div>
          </div>
        </main>
    })}
    </>
  )
}

export default Laboratory