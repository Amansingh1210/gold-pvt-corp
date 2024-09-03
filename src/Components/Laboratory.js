import React from 'react'
import {  useNavigate } from 'react-router-dom'
import  laboratory  from '../Data/laboratory';



function Laboratory({currentId}) {
    const nav = useNavigate();
  // eslint-disable-next-line
  let filtered = (laboratory.filter((obj)=> obj.id == currentId));
  

    return (
        <>
        {filtered.map((lab)=>{
        const {id,name,items} = lab
      return <main key={id} className='d-flex flex-column gap-4 '>
          <div className='fluid-contanier bg-dark text-center text-white py-5 px-5'>
              <div className='d-flex flex-row justify-content-between align-items-center '>
                  <div>
              <h1 className='uppercase labFont'>{name}</h1>
                  </div>
                  <nav>
                      <ol className="list-none d-flex gap-3 align-items-center cursor-pointer">
                <li className="fs-4 text-hover" onClick={()=>nav('/')}>Home</li>
                          <li className="">/</li>
                          <li className="md-fs-4 text-hover labFont-1">{name}</li>
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
                    // console.log(item.substring(31));
                    return <div key={item} className=' machine-log col-md-4 my-3 '><img src={item.src} alt='catalog                                                                                                                                                                                                                                                                                                ' className='lab-item ' /> <p className='machine-size'>{item.name}</p></div>
                  })}
            </div>
          </div>
        </main>
    })}
    </>
  )
}

export default Laboratory