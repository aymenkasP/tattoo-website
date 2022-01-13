import React from 'react'
import styled from 'styled-components'
import Button from './Button'

export default function Hero({item}) {
    const {title , subtitle , callToAction} = item[0]
    return (
        <HeroSection className=" mt-32 ">
            <div>
                <HeroText >
                    <h2 >
                           {title}
                        <span className="block text-primary ">
                            It&#x27;s today or never.
                        </span>
                    </h2>
                    <div >
                       <Button text="Book" link ="#contact" />
                    </div>
                </HeroText>
            </div>
        </HeroSection>
    )
}


const HeroSection = styled.section`

    margin-top: 5rem;

`

const HeroText = styled.div`
    text-align: center;
    font-size:30px ;
    
    h2 {
        color: white;
        display: flex;
        flex-direction: column;

        span {
            color: #EEBF63
        }
    }

    @media (max-width: 370px) {
        font-size:16px ;
        color: red;
  }
    @media (width: 523px) {
        font-size:20px ;
  }

`