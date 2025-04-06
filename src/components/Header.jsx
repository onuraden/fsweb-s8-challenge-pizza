    import React from 'react'
    import styled from 'styled-components'
    import NavController from './NavController'

    const Container = styled.div`
        background-color: #CE2829;
        width: 120rem;
        height: 20vh;
        text-align: center;
    `
    const Logo = styled.img`
        width: 15vw;    
        margin-top: 3rem;

    `
    
    function Header() {
      return (
        <Container>
            <Logo src="../images/iteration-1-images/logo.svg"/>
            <NavController />
        </Container>
      )
    }
    
    export default Header