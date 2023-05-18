// import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from 'react-scroll'
import Logo from "../Logo/Logo"
// import Button from "../Button/Button"

const Header = () => {
  return (
    <HeaderSection>
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary d-lg-flex">
                <div className="container">
                  <Link to="hero"><Logo /></Link>
                  {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"               aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button> */}
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>
        </div>
    </HeaderSection>
  )
}

const HeaderSection = styled.div`
    
`

export default Header

            {/* <Button text="Request Invite" /> */}

