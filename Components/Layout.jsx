import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Nav from './Nav'

const Container = styled.main`

    width: 80%;
    margin:auto;

    @media (max-width: 363px) {
         width: 100% ;
  }

`
const Note = styled.p`
    background-color:whitesmoke !important;
  color: black !important;
  text-align: center;
  padding:1rem;
  margin:0;
  
  a{
    color: blue;
}

`

export default function Layout({children}) {
    return (
        <>
        <Note >this website is developed by <a target="_blank"
      rel="noopener noreferrer"
      passHref href="http://aymenchenomi.tk/" >aymen chenomi</a>  </Note>
             <Nav />
            <Container>
                 {children}
            </Container>
             <Footer />
        </>
    )
}

    
