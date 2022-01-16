import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Contact from '../../Components/Contact'
import { getGallery } from '../../lib/api'

export default function image({gallery}) {
    return (
        <GallerySection>
            <h2>gallery</h2>
            <GalleryContainer >

            {
              gallery.map(item => {
              return  item?.work?.url && <ImageCard  key={item?.work?.fileName}  >
                            {
                              item?.work?.url && (
                                <Image src={item?.work?.url} 
                                        width={600} 
                                        height={450} 
                                        priority = "false"
                                        loading="eager"
                                        layout='responsive'
                                        alt=""
                                    /> 
                              )
                            }
                            <h3><span>by </span> 
                            <Link href={`/artist/${item?.artist?.artistName}`}>
                                <a>{item?.artist?.artistName} </a>
                            </Link>
                           </h3>
                        </ImageCard>
              })
            }
            </GalleryContainer>
            <Contact />

        </GallerySection>
    )
}



export async function getStaticProps() {
    const data = await getGallery()
  
    return {
      props: {
        gallery: data ?? null,
      },
    }
  }
  
 
  
  const GallerySection = styled.section`
   
   a {
    text-decoration: underline ;
    &:hover {
      color: #EEBF63;
    }
   }

   
    
h2 {
        color: #EEBF63;
        font-size:2rem;
    }

    @media (max-width: 360px) {
      width: 90%;
    margin: auto;
  }
    
  `
  const GalleryContainer = styled.section`
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 3rem;
    
  `

  const ImageCard = styled.div`
  padding: 2rem;
  font-weight: 600;
  border-radius:2px;

  text-transform: capitalize;
  background-color: white;
  width:450px;
 
  img {
    border-radius:5px;
  }

  span {
    color: #EEBF63;
  }

  h3 {
    margin-bottom: 0;
  }

  @media (max-width: 431px) {
      padding: 0.5rem;
  }
`