import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <ContactSection>
        <div className="container">
            <form action="#" className="contact_wrapper">
                <div className="contact_name">
                    <input type="text"  placeholder='First Name'/>
                    <input type="text"  placeholder='Last Name'/>
                </div>
                <input type="email" placeholder='Email' />
            </form>
        </div>
    </ContactSection>
  )
}


const ContactSection = styled.div`
    
`

export default Contact