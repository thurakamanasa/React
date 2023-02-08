import React ,{Component} from 'react'
import Cart from './Cart'
class Product extends Component {
    Product_Name = "vivo"
    Product_Price = 35000
    Colors = ['Blue','White','Red','Gold']
        render (){
            return (
                <div>
                <h2>Product Component</h2>
                <hr/>
                <Cart Name={this.Product_Name}
                    Price={this.Product_Price}
                    Colour={this.Colors}
                    />
                </div>
        )
    }
}
export default Product