import React, { Component } from 'react'

export default class Child extends Component {

  render() {
    let {name , price , model,id} = this.props.productDetails
    return (
        
       <div className='col-md-4'>
        <div className='bg-info p-4'>
            <h2>Child</h2>

            <div className=' p-3'>
                <h3>Product Name-: {name}</h3>
                <h3>Product price-: {price}</h3>
                <h3>Product model: {model}</h3>
                <button onClick={()=>this.props.updatePriceHandle(this.props.index)} className='btn btn-dark w-100'>Increase Price</button>
                <button onClick={()=>this.props.deleteItemHandle(this.props.index)} className='btn btn-danger w-100'>Delete Product</button>
            </div>
        </div>
        </div>
    )
  }
}
