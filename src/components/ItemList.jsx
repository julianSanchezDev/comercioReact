import React from 'react'
import data from './Data.json';
const ItemList = () => {

    

  return (

  

    
    data.map(function(person) {

        return <p className='bg-red-100'>{person.title}</p>
        
      })
            

    
  )
}

export default ItemList