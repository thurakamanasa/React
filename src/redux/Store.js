 import { productReducer } from './product/Product.Reducer'
 import { Store } from 'redux' 
 import { composeWithDevTools } from 'redux-devtools-extension'
 let Store = Store (productReducer, composeWithDevTools())
 export default { Store }


