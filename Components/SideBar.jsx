import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Close from "../styles/Close.svg"
import Button from './Button'
export default function SideBar({close}) {
   
    
    return (
        
    <SideBarSection data-aos="fade-left" data-aos-delay="90">
        <SideBarContainer data-aos="fade-up-right" >
            <Link href="/" >
                    <a onClick={() => close(false)} data-aos="fade-up-right">Home</a>
                </Link>
            <Link href="/#artists">
                    <a   onClick={() => close(false)} data-aos="fade-up-right">Artists</a>
                </Link>
                <Link href="/images">
                    <a  onClick={() => close(false)} data-aos="fade-up-right">Gallery</a>
                </Link>
                <Link href="/#about">
                    <a  onClick={() => close(false)} data-aos="fade-up-right">About Us</a>
                </Link>
                <Link href="/#contact">
                    <a  onClick={() => close(false)} data-aos="fade-up-right">Contact</a>
                </Link>                
                <Link href="/#faq">
                    <a  onClick={() => close(false)} data-aos="fade-up-right">FAQ</a>
                </Link>              

                <Button text="Close" click={close} />  
            </SideBarContainer>
        </SideBarSection>
        
    )
}




const SideBarSection = styled.div`

      display: flex;
      position: fixed;
      align-content: center;
        top: 0;
        z-index: 99999999;
        width: 100%;
        height: 190vh;

        a:hover {
            background-color:#EEBF63;
            color: black;
        }

`
const SideBarContainer = styled.div`
              padding-top: 5rem;
              background: rgba( 24, 23, 23, 0.75 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 19.5px );
-webkit-backdrop-filter: blur( 19.5px );
        display :flex;
        color: #EEBF63;
        font-weight: bold;
        font-size: 3rem;
        flex-direction: column;
        width: 100%;
        align-items: center;


        button {
            margin-top:2rem;
        }
       

`