import styled from 'styled-components'

const Contact = () => {

  return (
    <ContactSection id='contact'>
        <div className="container">
            <h1 className="contact_title">Contact Us</h1>
            <form action="#" className="contact_wrapper">
                <div className="contact_name">
                    <input type="text"  placeholder='First Name' required/>
                    <input type="text"  placeholder='Last Name' required/>
                </div>
                <input type="email" placeholder='Email'  required/>
                <textarea cols= {30} rows= {10} placeholder='Message' required></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    </ContactSection>
  )
}


const ContactSection = styled.div`
    position: relative;
    bottom: 100px;
    z-index: -1;

    .contact_title {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
    }

    .contact_wrapper {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        background-color: var(--white);
        box-shadow: var(--box-shadow);
        max-width: 800px;
        width: 100%;
        margin: auto;
        border-radius: 10px;
        padding: 1rem;
    }

    .contact_wrapper input,
    .contact_wrapper textarea {
        width: 100%;
        border-radius: 10px;
        padding: 1rem;
        margin: 1rem 0;
        border: 1px solid var(--textColor);
        resize: none;
        outline-color: rgb(35,236,89);
    }

    .contact_wrapper input::placeholder,
    .contact_wrapper textarea::placeholder {
        font-size: 1rem;
    }

    .contact_wrapper button{
        margin-top: 2rem;
        z-index: 1;
    }

    .contact_wrapper .contact_name {
        display: inline-flex;
        width: 100%;
        gap: 1rem;
    }

@media only screen and (max-width:1280px) {
    bottom: 0;
    margin: 5rem 0;
}

@media only screen and (max-width:768px) {
    bottom: 0;
    margin: 5rem 0;

    .contact_wrapper .contact_name {
        flex-direction: column;
    }
}
`

export default Contact