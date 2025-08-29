import React, { useEffect, useState } from 'react'

const Practicepage = () => {

  const [product, setProduct] = useState([])
const [currentPage,setCurrentPage] = useState(0)

  const fetchProduct = async () => {

    const data = await fetch("https://dummyjson.com/products?limit=90")
    const json = await data.json()
    // console.log(json)
    setProduct(json.products)

  }

  useEffect(() => {
    fetchProduct()
  }, [])

  const PAGE_SIZE =10
const totalProducts = product.length
const noOfPages = Math.ceil(totalProducts/ PAGE_SIZE )
const start = currentPage * PAGE_SIZE
const end = start + PAGE_SIZE

const handlePageChange =(n)=>{
setCurrentPage(n)
}


  return (
    <div className='app'>
      <div>{[...Array(noOfPages).keys()].map((n)=>(<button onClick={()=>handlePageChange(n)}  className={"array-num" + (n ===currentPage ? "active" : "")} key={n}>{n}</button>))}</div>
      <div className='container'>
        {
          product.slice(start,end).map((prod, index) => (

            <div className='product-card'>
              <img src={prod?.thumbnail} alt='' className='product-img' />
              <span className='title'>{prod?.title}</span>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Practicepage