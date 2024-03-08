import React from 'react'
import { Outlet } from 'react-router-dom'
import FeatureProduct from '../components/FeatureProduct'
import banner from '../img/banner-girl2-1.24e9b8f48d5a0ac32680edd194503695.png'

export default function Recommended() {
  return (
    <>
    <div className='bg2'>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={banner} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"/>
          </div>
          <div className="col-lg-6 left">
            <h1 className="display-5 fw-bold lh-1 mb-3">Recommended Products</h1>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            </div>
          </div>
        </div>
      </div>
    </div>   
    <FeatureProduct />
  <Outlet/>
  </>
  )
}
