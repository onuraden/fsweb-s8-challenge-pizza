import React from 'react'
import styled from 'styled-components'

const Controller = styled.div`
  display: flex;
  gap: 0.25rem;
  font-family: Barlow, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  position: absolute;
  top: 9.813rem;
  left: 43.438rem;
`

const NavItems = styled.a`
  color: white;
  text-decoration: none;
`

function NavController() {
  return (
    <Controller>
        <NavItems href="/home">Anasayfa</NavItems>
        <NavItems href="/orderpizza">- Sipariş oluştur</NavItems>
    </Controller>
  )
}

export default NavController