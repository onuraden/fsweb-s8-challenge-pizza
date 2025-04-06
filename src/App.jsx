import './App.css'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import OrderPizza from './pages/OrderPizza'
import Success from './pages/Success'
import Home from './pages/Home'

function App() {
  

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/orderpizza">
          <OrderPizza />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  )
}

export default App
