import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Practicepage = () => {

  const [product, setProduct] = useState([])
  const [page, setPage] = useState(1)

  const fetchData = async () => {

    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json()
    console.log(data)
    if (data && data.products) {
      setProduct(data.products)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

const SelectedPage=(selectpage)=>{
  setPage(selectpage)
}


  return (
    <div className='main_container'>
      {
        product.length > 0 && (
          <div className='product'>



            {
              product.slice(page * 10 - 10, page * 10).map((prod) => (<div className='product-box'>
                <img className='image-main' src={prod.thumbnail
                } />
                <div>{prod.title}</div>


              </div>))
            }
          </div>
        )
      }

      <div className='pagination'>
        <button disabled={page===1} onClick={()=>SelectedPage(page-1)}>
          <CircleArrowLeft />
        </button>
        {[...Array(product.length / 10)].map((_, i) => (<span onClick={()=>SelectedPage(i+1)} className={page===i+1 ?"selected-pagination" :""}>
{i+1}
        </span>))}
        <button disabled={page ===Math.ceil(product.length/10)} onClick={()=>SelectedPage(page+1)}>
          <CircleArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Practicepage