import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Button from './Button'

export default function Gallery({item}) {
    return (
        <GallerySection >
        <h2>Our Work</h2>
            <GalleryContainer >
            {
                item.map(work => {
                
                return <div data-aos="zoom-out-up" key={work?.work?.url} >

                 {
                     work?.work?.url && (
                        <GalleryCard >
                        <Image src={work.work.url}  
                                        width={600} 
                                        height={450} 
                                        priority = "true"
                                        loading="eager"
                                        layout='responsive'
                                        alt=''
                            /> 
                </GalleryCard>
                     )
                 }
                </div>

                 } )
            }
            </GalleryContainer>
            <BtnContainer >
                
            <Button text="More" link="/images" />
            </BtnContainer>
        </GallerySection>
    )
}


const GallerySection = styled.div`
    h2 {
        color: #EEBF63;
        font-size:2rem;
    }
`
const GalleryContainer = styled.div`

    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    
`
const GalleryCard = styled.div`
    width: 500px;
    img {
        border-radius:1rem; 
    }

    @media (max-width: 490px) {
       width: 350px ;
  }
   
    @media (max-width: 360px) {
       width: 300px  ;
  }
    @media (min-width: 530px) {
       width: 400px ;
  }
`
const BtnContainer = styled.div`
        display:flex;
        justify-content: center;

        margin-top: 5rem;
`
