import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import NotFound from './component/NotFound/NotFound';
import OrderReview from './component/OrderReview/OrderReview';
import Inventory from './component/Inventory/Inventory';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/Shop">
            <Shop></Shop>
          </Route>
          <Route path="/Review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/Inventory">
            <Inventory></Inventory>
          </Route>
          <Route path='/place-order'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


// Google it and then go to the reactjs.org link. And then also google what is side effect. Learn it)

