import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state = {
        userName: "Mohamed Yousry",
        userAge: 1,
        products: [
            {
                name: "LG",
                price: 5000,
                model: "TV",
                id: 1
            },
            {
                name: "Iphone",
                price: 15000,
                model: "Mobile",
                id: 2
            },
            {
                name: "HTC",
                price: 700,
                model: "Mobile",
                id: 3
            },
            {
                name: "Nokia",
                price: 2500,
                model: "Mobile",
                id: 3
            },
            {
                name: "Oppo",
                price: 1800,
                model: "Mobile",
                id: 3
            }
        ]
    }


  

    updatePrice = (index) => {
        console.log("Hallo", index)
        //Cope State
        let productsNew = [...this.state.products]
        //2- Make Action
        productsNew[index].price += 10;
        //3-set State
        this.setState({ products: productsNew })
    }

    deleteItem = (index) => {
        console.log("Hallo", index)
        //Cope State
        let productsNew = [...this.state.products]
        //2- Make Action

        productsNew.splice(index, 1);


        localStorage.setItem('products', JSON.stringify(productsNew));

     
    
        //3-set State
        this.setState({ products: productsNew })
    }


    componentDidMount() {
        // Step 3: Retrieve the array from local storage
        const localStorageData = localStorage.getItem('products');
        if (localStorageData) {
          const parsedData = JSON.parse(localStorageData);
          
          // Step 4: Update your component's state with the retrieved data
          this.setState({ products: parsedData });
        }
      }

    addItem = () => {

        console.log("Hallo")

        let product =
        {
            name: "toshepa",
            price: 5000,
            model: "TV",
            id: 1
        }
        //Cope State
        let productsNew = [...this.state.products]
        //2- Make Action

        productsNew.push(product)

        localStorage.setItem('products', JSON.stringify(productsNew));

     
        this.setState({ products: productsNew })
       
    }

    render() {
        return (
            <div className='container'>
                <div className='bg-danger p-5'>
                    <h2>Parent</h2>
                    <h5>Hi My Name Is :- {this.state.userName}</h5>
                    <h5>Hi My Age Is :- {this.state.userAge}</h5>
                    <div className='row gy-3'>
                        {this.state.products.map((product, index) => <Child key={index} productDetails={product} index={index} updatePriceHandle={this.updatePrice} deleteItemHandle={this.deleteItem} />)}
                        <button onClick={this.addItem}>Add</button>
                        {/* <Child productDetails={this.state.products[0]} />
            <Child productDetails={this.state.products[1]} />
            <Child productDetails={this.state.products[2]} /> */}
                    </div>
                </div>
            </div>
        )
    }
}
