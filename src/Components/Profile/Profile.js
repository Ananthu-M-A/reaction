import React from 'react';
import handleSubmit from '../../Handles/HandleSubmit';
import { useRef } from 'react';

const Wishlist = () => {

  const dataRef = useRef()

  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value)
    dataRef.current.value = "";
  }

  return (  
    <>
        <h1 className='text-center m-5'>Account Profile</h1>
        <form onSubmit={submithandler}>
          <input type="text" ref={dataRef} />
          <button type="submit">Save</button>
        </form>
    </>
  )
}

export default Wishlist;