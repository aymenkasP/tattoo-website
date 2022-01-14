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

export default function Layout({children}) {
    return (
        <>
            <Container>
             <Nav />
                 {children}
             <Footer />
            </Container>
        </>
    )
}

    
