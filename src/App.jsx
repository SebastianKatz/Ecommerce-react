import './App.css';
import ProductsContainer from './containers/ProductsContainer';
import {EcommerceProvider} from './context/EcommerceContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { HomeContainer } from './containers/HomeContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <EcommerceProvider>
          <Switch>

            <Route exact path="/">
              <HomeContainer />  
            </Route>
            <Route exact path="/productos">
              <ProductsContainer />  
            </Route>
            <Route path="/productos/:busqueda">
              <ProductsContainer />  
            </Route>  

          </Switch>
        </EcommerceProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
