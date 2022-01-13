import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import facebook from "../styles/facebook.svg"
import instagram from "../styles/instagram.svg"

export default function Footer() {
    return (
        <FooterSection>
        <p>2022</p>
        <Social>
             <Image 
                   src={facebook}
                   width={50} 
                    height={50} 
                      priority = "false"
                       loading="eager"
                          layout='fixed'
                           alt=""
                                    /> 
                                   
                                <Image 
                                    src={instagram}
                                    width={50} 
                                    height={50} 
                                    priority = "false"
                                    loading="eager"
                                    layout='fixed'
                                    alt=""
                                    /> 

</Social>
        </FooterSection>
    )
}




const FooterSection = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin-top:2rem;
    color: #EEBF63;
    background-color: black;
    @media (max-width: 719px) {
      padding-bottom: 10rem;
  }
    
`

const Social = styled.div`
    display: flex;
    gap: 2rem;
    
`