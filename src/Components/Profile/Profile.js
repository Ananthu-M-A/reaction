import React from 'react';
import { useRef } from 'react';

const Wishlist = () => {

  const dataRef = useRef()

  return (
    <>
      <div className='container-fluid'>
        <div className='row text-center p-5'>
          <h1 className='text-center mb-5'>Account Profile</h1>
          <div className='col'>
            <form>
              <input type="file" ref={dataRef} multiple />
              <button className='btn btn-outline-dark' type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist;