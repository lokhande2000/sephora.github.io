import { useContext } from 'react'
import { ContextProductDataProvider } from '../../Context/ProductDataProvider'
import Singlecategorycard from './Singlecategorycard'

const Singlecategory2 = () => {
    const { Singlecategorys } = useContext(ContextProductDataProvider)
  return (
    <>
       {
        Singlecategorys && Singlecategorys.filter((e)=> e.id > 3).map((product)=>(<Singlecategorycard key={product.id} product={product}/>))
      }
    </>
  )
}

export default Singlecategory2
