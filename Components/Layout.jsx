import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Nav from './Nav'

export default function Layout({children}) {
    return (
        <>
            <Nav />
            <Container>
                 {children}
            </Container>
            <Footer />
        </>
    )
}

    
const Container = styled.main`

    width: 80%;
    margin:auto;

    @media (max-width: 363px) {
         width: 100% ;
  }

`