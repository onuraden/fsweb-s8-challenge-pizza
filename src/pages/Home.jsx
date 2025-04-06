import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';


const Container = styled.div`
  background-image: url("../images/iteration-1-images/home-banner.png"); 
  background-size: contain;
  background-repeat: no-repeat;
  width: 120rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  
`

const Logo = styled.img`
  width: 15vw;
  margin-top: 4rem;

`

const Title = styled.p`
  font-family: Roboto condensed, sans-serif;
  font-size: 5rem;
  color: white;
  font-weight: 300;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`

const Button = styled.button`
  background-color: #FDC913;
  border: none;
  padding: 0.8rem 3rem;  
  font-family: Barlow, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 2rem;
  cursor: pointer;
`


function Home() {

  let history = useHistory();
  function handleClick() {
    history.push("/orderpizza");
  }

  return (
    <Container>
      <Logo src="../images/iteration-1-images/logo.svg"/>
      <Title>KOD ACIKTIRIR<br/>PİZZA, DOYURUR</Title>
      <Button onClick={handleClick}>ACIKTIM</Button>
    </Container>
  )
}

export default Home
