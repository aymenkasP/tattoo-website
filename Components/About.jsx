import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Button from './Button'

export default function About({item}) {

    const {aboutUsImage } = item[0]
  
    return (
        <AboutSectionContainer id="about" >
        
                    <ImageContainer >
                                    <Image src={aboutUsImage.url}  
                                        width={600} 
                                        height={450} 
                                        priority = "false"
                                        loading="eager"
                                        layout='responsive'
                                        alt=""
                                    /> 
                    </ImageContainer>

            <TextContainer>

                <h2 className=" text-xl font-bold " >About the parlor</h2>
                <p className ="max-w-sm">
                  As a full-service digital designer, I work closely with my clients to define, design and develop transformative user experiences across all platforms and brand’s touchpoints.
                </p>
               <Button  text="Gallery" link ="/images"  /> 
            </TextContainer> 

            </AboutSectionContainer>
        
    )
}



const AboutSectionContainer = styled.section`
        max-width:100% ;
        margin: auto;
        margin-top: 10rem;
        display:flex;
        justify-content: space-evenly;
        flex-wrap:wrap;
        background: #F8F8F8;
        border-radius: 17px;
        padding: 1rem ;
        gap: 2rem;
        background: #191919;
box-shadow:  5px 5px 10px #121212,
             -5px -5px 10px #202020;
        
             color: white !important;

        @media (max-width: 720px) {
        flex-direction: column;
        align-items: center
  }
        @media (max-width: 360px) {
         p {
             font-size: 12px !important;
             line-height: 1.4rem !important;


         }
  }

`
const ImageContainer = styled.div`

    width: 90%;
    flex: 0.5;
    min-width: 30vw;
    img {
    }

`
const TextContainer = styled.div`

    flex: 0.5;


    h2 {
        margin: 0;
    }

    p {
        font-size: 1rem;
        line-height: 2rem;

    }

`