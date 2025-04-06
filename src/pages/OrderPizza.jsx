import React from 'react'
import Header from '../components/Header'
import PizzaInfo from '../components/PizzaInfo'
import OrderForm from '../components/OrderForm'

function OrderPizza() {
  return (
    <div>
      <Header />
      <PizzaInfo />
      <OrderForm />
    </div>
  )
}

export default OrderPizza