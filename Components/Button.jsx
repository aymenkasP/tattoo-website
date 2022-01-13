import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

export default function Button({text , link , click }) {
    return (
        <ButtonContainer >
           {
               link ? (
                <Link href={link}>
                    <a>{text}</a>
                </Link>
               ):(
                
                    <p  onClick={() => click(false)} >{text}</p>
                
               )
           }
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button`

    background: #EEBF63;
    box-shadow: 5px 5px 0px rgba(163, 160, 160, 0.2);
    border-radius: 5px;
    border: none;
    padding: 10px 20px;
    width: 100px;
    font-weight: bold;
    font-size: clamp(1rem, 1vw, 2rem);
    /* or 150% */

    &:hover {
        cursor: pointer;
        background-color: #EEBF50;
        box-shadow: 0px 0px 0px rgba(163, 160, 160, 0.2);

    }
    color: #000000;

`