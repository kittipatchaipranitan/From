import React from 'react'
import styled from 'styled-components'
import Main from './Main'
import Index from './Index'
import Portfolio from './Portfolio'
import Footer from './Footer'

const Nav = styled.nav`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    background-color: #333;
    padding: 1rem;
    text-align: center;
`
const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`
const Navcon = styled.div`
    display: flex;
    justify-content: space-between;
`
const Logo = styled.div`
    a{
        font-size: 2rem;
        color: #fff;
        text-decoration: none;
    }
`
const Menu = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;

    li{
        margin: 0 1rem;
    }
    li a{
        color: #fff;
        text-decoration: none;
    }
`

function Navbar() {
    return (
        <div>
            <Nav>
                <Container>
                    <Navcon>
                        <Logo>
                            <a href='#'>K.C.</a>
                        </Logo>
                        <Menu>
                            <li><a href='#'> แฟ้มสะสมผลงาน </a></li>
                            <li><a href='#'> เกี่ยวกับ </a></li>
                            <li><a href='#'> ติดต่อ </a></li>
                        </Menu>
                    </Navcon>
                </Container>
            </Nav>
            <Main/>
            <Index/>
            <Portfolio/>
            <Footer/>
        </div>
    )
}

export default Navbar