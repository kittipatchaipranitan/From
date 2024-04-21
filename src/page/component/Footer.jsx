import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
`
const Fobackgroud = styled.div`
    padding: 1rem;
    background-color: rgba(255,152,67,255);
    margin-top: 50px;
`
const Footercon = styled.div`
    display: flex;
`
const Container = styled.div`
    max-width: 1400px;
    margin: auto;
`

const Footerinfo = styled.div`
    h3{
        color: white;
        font-size: 30px;
        text-align: center;
        padding-bottom: 10px;
    }
    p{
        color: white;
        font-size: 17px;
        text-align: center;
    }

`

function Footer() {
    return (
        <Foot>
            <Fobackgroud>
                <Footercon>
                    <Container>
                        <Footerinfo>
                            <h3>KITTIPAT CHAIPRANITAN</h3>
                            <p>132/40, Moo 3, Bang Phut, Pak Kret, Nonthaburi, 11120,</p>
                            <p>Tel : 099 951 3694 Email : s6404062620176@email.kmutnb.ac.th</p>
                        </Footerinfo>
                    </Container>
                </Footercon>
            </Fobackgroud>
        </Foot>
    )
}

export default Footer