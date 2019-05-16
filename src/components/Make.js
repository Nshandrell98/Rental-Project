import React from 'react'

class Make extends React.Component {
    
    constructor() {
        super();
        this.state = {
            products: [],
        }
    }
    componentDidMount() {
        fetch('http://localhost:8000/api/product/cars/make/' + this.props.match.params.make)
        .then(results => results.json())
        .then(data => {
            this.setState({products: data});   
        }

        )


    } 

    render() {
        let products = this.state.products.map( product =>{
            return(
            <div className="pt  pit img-responsive col-sm-3" key={product.id}>
                <h3>{product.name}</h3>
                <a href={`/product/${product.id}`}><img src={`/${product.image}`}/></a>
                <p>Price per night ${product.price}.00</p>
                <a className="view" href={`/product/${product.id}`}>View</a>
            </div>
        )})
            return (
                
                <div className="pie pmt">{products}>
                </div>
            )
    }
};

export default Make