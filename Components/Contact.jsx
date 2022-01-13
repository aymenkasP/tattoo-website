import React from 'react'
import styled from 'styled-components'

export default function Contact() {
    return (
        <ContactSection className="contact" id="contact">

        <h2 className="text-center text-3xl font-bold text-primary m-5"><span>contact</span> us</h2>

        <ContactContainer >
                <ContactInfoContainer>
                    <p>Phone number: <span>+134T234T223645</span> </p>
                    <p>Email address: <span>kasper@gmail.com</span></p>
                    <p>Address: <span>random data  address</span></p>

                    <h3>Hours </h3>
                    <p>Monday :<span> 7AM–3PM</span></p>
                    <p>Tuesday :<span> 7AM–3PM</span></p>
                    <p>Wednesday :<span> 7AM–3PM</span></p>
                    <p>Thursday :<span> 7AM–3PM</span></p>
                    <p>Friday :<span> 7AM–3PM</span></p>
                    <p>Saturday :<span> Closed</span></p>
                    <p>Sunday :<span> Closed</span></p>
             
                </ContactInfoContainer>

            <FormSection action="" className="form">
                <label htmlFor="text" >Name</label>
                <input type="text" placeholder="your name" className="box" />
                <label htmlFor="email" >Email</label>
                <input type="email" placeholder="your email" className="box" />
                <label htmlFor="tel" >subject</label>
                <input type="tel" placeholder="subject" className="box" />
                <textarea placeholder="your message" className="box" cols="30" rows="10" ></textarea>
                <Send>

                    <input type="submit" value="send message" className="btn" />
                </Send>
            </FormSection>

        </ContactContainer>
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1632137920043!5m2!1sen!2sin" allowFullScreen={true} loading="lazy"></iframe>


</ContactSection>
    )
}


const ContactSection = styled.section`
    display: flex;
    margin-top: 10rem;

    flex-direction: column;

    h2 {
        color: #EEBF63;
        font-size:2rem;
    }

    iframe {
        margin-top: 3rem;
        height: 400px;
        border: none;

    }

        @media (max-width: 420px) {
        align-items:center;
  }
`

const ContactContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    flex-direction: row;
    justify-content: space-between;
    
`
const FormSection = styled.div`
    display: flex;
    gap: 0.5rem;
    flex: 0.9;
    flex-direction: column;
    border-radius: 20px;
    padding: 1.5rem;
background: #191919;
box-shadow:  5px 5px 7px #151515,
             -5px -5px 7px #1d1d1d;
    input , textarea {
        border: none;
        padding:1rem;
        
    }

    label {
        color: #EEBF63;

    }
`
const Send = styled.div`
    input {
        background-color: #EEBF63;
        font-weight: 600;
        cursor: pointer;
    }
`

const ContactInfoContainer = styled.div`
    color: #EEBF63;
    span {
        color: white;
    }
`

