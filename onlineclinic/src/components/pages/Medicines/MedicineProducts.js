import React from 'react'
import { category,condition, popularProducts } from '../../../utils/Data'
import MedicineCards from './MedicineCards'

const MedicineProducts = () => {
  return (
    <div className='m-5 p-5'>
    <h4>Browse medicines & health products</h4>
    <h4>Health condition</h4>
    <MedicineCards condition={condition} />
    <h4>Categories</h4>
    <MedicineCards condition={category} />
    <h4>Popular Products</h4>
    </div>
  )
}

export default MedicineProducts