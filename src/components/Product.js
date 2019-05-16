import React, {Component} from 'react';


    class Product extends Component {
    
        constructor() {
            super();
            this.state = {
                products: [],
            }
        }
        componentDidMount() {
            fetch('http://localhost:8000/api/product/')
            .then(results => results.json())
            .then(data => {
                this.setState({products: data});   
            }

            )

    
        }
        render() {
            let products = this.state.products.map( product =>{
                return(
                <div className="col-sm-4" key={product.id}>
                    <div className="pt">
                        <h3>{product.name}</h3>
                        <a href={`/product/${product.id}`}><img src={product.image}/></a>
                        <p>Price per night ${product.price}.00</p>
                        <a className="view" href={`/product/${product.id}`}>View</a>
                    </div>
                </div>
            )})
                return (
                    <div className="container">
                        <div className="row pie">       {products}>
                        </div>
                    </div>
                )
        }
    };
export default Product