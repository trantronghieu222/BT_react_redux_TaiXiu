import ReactDOM from 'react-dom/client'
import GameTaiXiu from './GameTaiXiu/GameTaiXiu'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

// Redux 
import {store} from './redux/store'
import {Provider} from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GameTaiXiu></GameTaiXiu>
  </Provider>
  
)
