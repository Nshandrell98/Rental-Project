const Product = require('../model/product');
const daoCommon = require('../common/daoCommon');

class ProductDao{
    constructor(){
        this.common = new daoCommon();
    }
    findAll(){
        let sqlRequest = "SELECT * FROM product";

        return this.common.findAll(sqlRequest).then(rows => {
            let products = [];
            for (const row of rows){
                console.log(row)
                products.push(new Product(
                    row.id,
                    row.name,
                    row.description,
                    row.price,
                    row.image, 
                    row.color,
                ))
            }
            return products;
        });
    }
    findById(id){
        let sqlRequest = "SELECT * FROM product WHERE id=" + id;
        let sqlParams = {
            $id: id
        };

        return this.common.findById(sqlRequest, sqlParams).then(rows => {
            let products = [];
            for (const row of rows){
                products.push(new Product(
                    row.id,
                    row.name,
                    row.description,
                    row.price,
                    row.image, 
                    row.color,
                ))
            }
            return products;
        });
    }
    findByColor(color){
        let sqlRequest = "SELECT * FROM product WHERE color ='" + color+ "'";
        console.log("made it here")
        let sqlParams = {
            $color: color
        }

        return this.common.findByColor(sqlRequest, sqlParams).then(rows => {
            console.log(rows)
            let products = [];
            for (const row of rows){
                products.push(new Product(
                    row.id,
                    row.name,
                    row.price,
                    row.image, 
                    row.color,
                    row.description
                ))
            }
            return products;
        });
    }
};

module.exports = ProductDao;