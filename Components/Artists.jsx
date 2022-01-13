import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser';


export default function Artists({item}) {

    return (
        <ArtistsSection id="artists" >

            <h2 >
                Our artists
            </h2>

            <ArtistsContainer>
            
            {
                item.map(artist => {
                    return    <div data-aos="zoom-in" key={artist.artistName} >
                <ArtistsCard>
                    <ArtistsImage>
                    <Image src={artist.artistImage.url}  
                                        width={600} 
                                        height={700} 
                                        priority = "false"
                                        loading="eager"
                                        layout='responsive'
                                        alt={artist.artistName}
                                    /> 
                    </ArtistsImage>
                    <ArtistsNameSec>
                            {artist.artistName}
                    </ArtistsNameSec>
                    <div>
                         {
                            parse(documentToHtmlString(artist.aboutTheArtist.json))
   
                         }
                    </div>
                    <View>
                        <Button text="More" link={`/artist/${artist.artistName}`} />
                    </View>
                </ArtistsCard>
            </div>
                } )
            }
          
         
             
            </ArtistsContainer>
    

        </ArtistsSection>
    )
}


const ArtistsSection = styled.section`

    margin-top: 10rem;

    h2 {
        color: #EEBF63;
        font-size:2rem;
    }

`

const ArtistsContainer = styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
`
const ArtistsCard = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color:white;
    padding: 1rem;
    border-radius:1rem;

   

`

const ArtistsImage = styled.div`
    width: 100%;
        img {

            border-radius:1rem; 
        }

`
const ArtistsNameSec = styled.div`
    font-size: 1.5rem;
    margin-top:0.6rem;
    font-weight: 600;
    text-transform: capitalize;

`
const View = styled.div`
    display: flex ;
    gap: 0.4rem;
    align-items: center;
    cursor: pointer;
    margin: 1rem 0 0;
    &:hover {
        color: #EEBF63;
    }
    p {
        margin: 0;
    }

`


