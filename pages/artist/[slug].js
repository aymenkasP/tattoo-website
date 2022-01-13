import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser';
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import { ArtistWork, getArtists, getArtistsByName } from '../../lib/api';
import facebook from "../../styles/facebook.svg"
import instagram from "../../styles/instagram.svg"
import Contact from '../../Components/Contact'

export default function index({artistWork,artistName,artistImage,aboutTheArtist , phoneNumber ,address ,email}) {
    
    


    return (
        <TheSection  >
            <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" >

            <HeaderContainer>
                    <ImageContainer>
                        <Image 
                        src={artistImage.url}  
                        width={600} 
                         height={650} 
                         priority = "false"
                         loading="eager"
                         layout='responsive'
                         alt=""
                          /> 
                    </ImageContainer>
                <ArtistAboutContainer>
                    <h2>{artistName}</h2>
                    <div>{parse(documentToHtmlString(aboutTheArtist?.json))}</div>
                    <div>
                            <div>
                                <p><span>Address :</span> {address}</p>   
                                <p><span>Phone Number :</span> {phoneNumber}</p>   
                                <p><span>Email :</span> {email}</p>   
                            </div>
                            <div>social media</div>
                            <SocialMediaContainer>
                                
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
                                   
                            </SocialMediaContainer>
                        
                    </div>
                </ArtistAboutContainer>
            </HeaderContainer>

            <GallerySection>
                <h2>{artistName} Work</h2>
                <GalleryContainer>
                    {
                        artistWork.map(item => {
                           return <GalleryCard data-aos="zoom-out" key={item.work.url}>
                            <Image 
                            src={item.work.url}  
                            width={600} 
                            height={600} 
                            loading="eager"
                            layout='responsive'
                            alt=""
                          /> 
                          </GalleryCard>
                        })
                    }
                </GalleryContainer>
            </GallerySection>
            <Contact />
            </div>
        </TheSection>
    )
}



export async function getStaticProps({ params}) {
    const data = await getArtistsByName(params.slug)
    const artistWork = await ArtistWork(params.slug)
        return {
        props: {
                ...data[0] ?? null
           ,
            artistWork 
        },
        }
  }



export async function getStaticPaths() {
    const artist = await getArtists()
   
      return {
        paths: artist?.map((TheArtist) => `/artist/${TheArtist.artistName}`) ?? [],
        fallback: false,
      }
  }


  const TheSection = styled.section`
    width: 90%;
    margin: auto;
    @media (max-width: 776px) {

        width: 90%;
        margin: auto;

    }

    

`
  const HeaderContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        background-color:white;
        margin-top: 5rem;

        border-radius:0.5rem;

        gap: 2rem;
        h2 {
        color: #EEBF63;
        font-size:2rem;
        text-transform: capitalize;
        background: black;
        padding:0.6rem;
    }

    span {
        color: black ;
        font-weight: bold;
    }
        
    @media (max-width: 776px) {

        display: grid;
            gap: 0;
         }

`
  const ImageContainer = styled.div`
    flex: 1;
    padding:1rem;

    img {
        border-radius:1rem
    }
    
`
  const ArtistAboutContainer = styled.div`
  flex: 1;
    padding-bottom: 2rem;

    @media (max-width: 776px) {

        padding-left: 1rem;


        }


`



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
    width : 400px;
    img {
        border-radius:1rem; 
    }
`
const SocialMediaContainer = styled.div`
        display:flex;
        gap: 1rem;
        margin-top: 0.5rem;

        img {
            cursor: pointer;
        }
`
