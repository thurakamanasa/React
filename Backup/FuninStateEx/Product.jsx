import React,{useState} from "react";
function Product (){
    let[Product,setProduct] = useState({Product_Name:"SONY Alpha ILCE-6400L", Price:127559, qty:1,Image:"https://rukminim1.flixcart.com/image/312/312/kc0u7bk0/dslr-camera/f/r/s/alpha-6400-vlogger-starter-kit-alpha-6400-vlogger-starter-kit-original-imaft8hwtuyxyg7t.jpeg?q=70"})

    /* const decrHandler = ()=>{
        setProduct({
            ...Product, qty : Product.qty - 1
        })
    }
    const incrHandler = ()=>{
        setProduct({
            ...Product, qty : Product.qty + 1
        })
    } */
    return  <div className="container">
                <div className="row">
                    <div className="col-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{Product.Product_Name}</td>
                                    <td><img src={Product.Image} width="80px" alt=""/></td>
                                    <td>{Product.Price}</td>
                                    <td><i className="fa fa-minus-circle" onClick={()=>{
                                        setProduct({
                                           ...Product, qty : Product.qty - 1
                                        })
                                    }}></i>{Product.qty}<i className="fa fa-plus-circle" onClick={()=>{
                                        setProduct({
                                            ...Product, qty : Product.qty + 1
                                        })
                                    }}></i></td>
                                    <td>{Product.Price * Product.qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
}
export default Product