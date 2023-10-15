import React, {useState} from 'react'

const MedicineCards = ({condition}) => {

  // const Arr= {props};
  console.log(condition)
  return (
    <div className='d-flex '>{condition.map((ele) => {
      return(
        <div className='col-3 mx-3'><>
          <img src={ele.image} alt='' width='100%' height='200px'/>
          <span className=''>{ele.title}</span></>
        </div>
      )
    })}
    </div>   
    

  )
}

export default MedicineCards