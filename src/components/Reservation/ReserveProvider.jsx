import React, { useState } from 'react'

const ReserveProvider = (props) => {
  const [reserveState,setReserveState]=useState({
    items: [],
    totalAmount: 0
  });

  const addItemToReserveHandler = (item)=>{
    console.log(item);

    setReserveState({items: updatedItems, totalAmount: updatedTotalAmount})
  }



  


  const hairContext={
    items: reserveState.items,
    totalAmount: reserveState.totalAmount,
    addItem: addItemToReserveHandler,
  }


  return (
    <HairContext.Provider value={hairContext}>{props.children}</HairContext.Provider>
  )
}

export default ReserveProvider