import React from 'react'
import styled from 'styled-components'

const App = styled.header`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`
const Backgroud = styled.div`
    background-image: url('https://kmutnb.ac.th/getattachment/55424ff1-d1e6-4fbd-b990-52753af0cdf6/.aspx') ;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`
const Maincon = styled.div`
    display: flex;
`
const Maininfo = styled.div`
    width: 190%;
    padding: 4rem;
    text-align: center;
    color: #ffffff;
    font-size: 25px;
    p{
        margin: 20px 0;
    }
`
const Mainbutton = styled.a`
    display: inline-block;
    background-color: rgba(255,152,67,255);
    color: white;
    padding: 10px;
    text-decoration: none;
    border-radius: 5px;
`



function Main() {
    return (
        <App>
            <Backgroud>
                <Container>
                    <Maincon>
                        <Maininfo>
                            <h3>EDUCATION AND QUALIFICATION </h3>
                            <p>King Mongkut's University of Technology North Bangkok (KMUTNB)</p>
                            <Mainbutton href='#'>View More</Mainbutton>
                        </Maininfo>
                    </Maincon>
                </Container>
            </Backgroud>
        </App>
    )
}

export default Main