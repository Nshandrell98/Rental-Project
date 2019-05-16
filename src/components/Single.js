import React from 'react'


class Single extends React.Component {
    constructor() {
        super();
        this.state = {
            product: {
                id: "",
                name: "",
                description: "",
                price: "",
                image: "",
                color: ""


            }
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/product')
        .then(results => results.json())
        .then(data => {
            let product = data.find(item =>{
                return item.id === Number(this.props.match.params.id) ? item : null
            })
            this.setState({product});   
        }

        )


    }

    render() {
        let product = this.state.product
        return ( 
            <div className="pot">
                <div className="pt prSing img-responsive col-sm-4" key={product.id}>
                    <h1>{product.name}</h1>
                    <img src={`/${product.image}`}/>
                    <p>{product.description}</p>
                    <p>Price per night ${product.price}</p>
                </div>
        </div>
            )
    }
};
export default Single