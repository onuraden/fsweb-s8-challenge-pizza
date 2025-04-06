import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
    width: 33.25rem;
`

const PizzaType = styled.p`
    position: absolute;
    top: 14.875rem;
    left: 43.438rem;
    font-family: Barlow, sans-serif;
    font-weight: 600;
    font-size: 22px;
`
const PizzaPrice = styled.p`
    position: absolute;
    top: 19.25rem;
    left: 43.438rem;
    font-family: Barlow, sans-serif;
    font-weight: 700;
    font-size: 28px;
`
const PizzaScore = styled.p`
    position: absolute;
    top: 19.531rem;
    left: 69.273rem;
    font-family: Barlow, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #5F5F5F;
`
const PizzaEval = styled.p`
    position: absolute;
    top: 19.531rem;
    left: 74.224rem;
    font-family: Barlow, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #5F5F5F;
`



function PizzaInfo() {
  return (
    <Info>
        <PizzaType>Position Absolute Acı Pizza</PizzaType>
        <PizzaPrice>85.50₺</PizzaPrice>
        <PizzaScore>4.9</PizzaScore>
        <PizzaEval>(200)</PizzaEval>
    </Info>
  )
}

export default PizzaInfo