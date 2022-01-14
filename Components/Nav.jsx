import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import SideBarComponent from './SideBar';



const NavBarMobile = styled.div`
    display: none;
    position: fixed;
    width: 100%;
    background : #000000;
    bottom: 0;
    padding: 0.4rem;
    background-color: white;
    z-index: 9999;
    justify-content: space-around;
    align-items: center;
    color: black;
  
             background: #1a1a1a;
box-shadow:  5px 5px 0px #0d0d0d,
             -5px -5px 0px #272727;
    a {
        display: flex;
        align-items: center;
        flex-direction: column;
        min-width: 80px;
        border-radius:1rem;
        font-weight: 400;
        color: white;
    }

    @media (max-width: 719px) {
        display :flex ;
        align-items: center;
        justify-content: space-around;
  }
`


const NavBar = styled.nav`
    display: flex;
    position: sticky;
    background : #181717ef;
    top: 0;
    padding: 0.8rem;
    z-index: 9999;
    justify-content: space-around;
    align-items: center;
    color: white;
    background: rgba( 25, 24, 24, 0.55 );
backdrop-filter: blur( 12.5px );
-webkit-backdrop-filter: blur( 12.5px );
    @media (max-width: 725px) {
        padding: 0.5rem 1.5rem;
        justify-content: space-between;
  }
    
`
const LinksContainer = styled.nav`
    display: flex;
    gap: 2rem;
    justify-content: space-around;
    a {
      
        &:hover {
            color: #EEBF63;
            cursor: pointer;
        }
    }

    @media (max-width: 727px) {
        display: none;
        margin-top:1rem;
  }
    
`
const NavBtn = styled.nav`

    @media (max-width: 727px) {
        display: none;
        
  }
    
`
const HamburgerMenu = styled.nav`

display: none;

    @media (max-width: 727px) {
        display:flex;
  }
    
`



export default function Nav() {
    const [SideBar, setSideBar] = useState(false)

    

    return (
        <>
        <NavBar>
            <div>Logo</div>
            <LinksContainer>
            <Link href="/">
                    <a>Home</a>
                </Link>
            <Link href="/#artists">
                    <a>Artists</a>
                </Link>
                <Link href="/images">
                    <a>Gallery</a>
                </Link>
                <Link href="/#about">
                    <a>About Us</a>
                </Link>
                <Link href="/#contact">
                    <a>Contact</a>
                </Link>                
                <Link href="/#faq">
                    <a>FAQ</a>
                </Link>                
            </LinksContainer>

            <NavBtn>
                <Button text="Book" link="#contact" />
            </NavBtn>
        
            <HamburgerMenu onClick={() => setSideBar(true)} >
            <svg width="48px" height="48px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title>70 Basic icons by Xicons.co</title><path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill="#6f7380"/><path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill="#6f7380"/><path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill="#6f7380"/></svg>
            </HamburgerMenu>
        

        </NavBar>

        <NavBarMobile >
               <Link href="/">
                    <a><svg viewBox="0 0 576 512" width="39" title="home">
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
                    </svg>
                     Home
                    </a>
                </Link>
                <Link href="tel:5554280940">
                    <a><svg viewBox="0 0 448 512" width="30" title="phone-square-alt">
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z" />
                    </svg>Call us</a>
                </Link> 
                <Link href="/images">
                    <a><svg viewBox="0 0 576 512" width="35" title="images">
                    <path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z" />
                    </svg>Gallery</a>
                </Link>
        </NavBarMobile>

            {
                SideBar && <SideBarComponent close={setSideBar} />
            }
       
        </>
    )
}




