import React from 'react'
import styled from 'styled-components'

const Indexs = styled.section`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Sarabun", sans-serif;
    font-weight: 200;
    font-style: normal;
    }
    background-color: white;
`
const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`
const Indexcon = styled.div`
    display: flex;
`
const Indeximg = styled.div`
    width: 100%;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
`

const Indexinfo = styled.div`
    width: 80%;
    padding: 2rem;
    margin: auto;
    p{
        margin: 20px 0;
        font-size: 20px;
    }
    .index-button{
        display: inline-block;
        background-color: rgba(255,152,67,255);
        color: white;
        padding: 10px;
        text-decoration: none;
        border-radius: 5px;
    }
    h3{
        font-size: 30px;
        display: inline;
    }
    span{
        color: rgba(255,152,67,255)
    }
`
const Indexbackgroud = styled.div`
    background-color: rgba(255,152,67,255);
    padding-bottom: 10px;
`

const Indexbackgroud2 = styled.div`
    background-color: white;
    border-radius: 0px 0px 200px 200px;
    -webkit-border-radius: 0px 0px 200px 200px;
    -moz-border-radius: 0px 0px 200px 200px;
`

const Indexfootter = styled.div`
    font-size: 30px;
    text-align: center;
    padding-top: 2rem;;
    max-width: 1400px;
    margin: 0 auto;
    padding-bottom: 20px;
    p{
        font-size: 20px;
        text-align: center;
        padding-top: 1rem;
    }
`
const Indeximg2 = styled.div`
    padding-top: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`
const Indeximg3 = styled.img`
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
`

function Index() {
    return (
        <Indexs>
                <Container >
                    <Indexcon>
                        <Indeximg >
                            <img src="https://image.makewebeasy.net/makeweb-template/m_1920x0/template0072/DefaultData/Image1_1_.webp?v=202012190947" width="100%" alt="" />
                            <img src="https://image.makewebeasy.net/makeweb-template/m_1920x0/template0072/DefaultData/Image1_2_.webp?v=202012190947" width="100%" alt="" />
                            <img src="https://image.makewebeasy.net/makeweb-template/m_1920x0/template0072/DefaultData/Image1_3_.webp?v=202012190947" width="100%" alt="" />
                            <img src="https://image.makewebeasy.net/makeweb-template/m_1920x0/template0072/DefaultData/Image1_4_.webp?v=202012190947" width="100%" alt="" />
                        </Indeximg>
                        <Indexinfo>
                            <h3>ABOUT  <span> CATERING  </span> </h3>
                            <p>Catering service provides food, beverages, and sometimes other related services for various events and occasions. Catering services can be hired for anything from small private parties to large corporate functions, weddings, and other special events.
                                It can range from small-scale gatherings to large-scale events, such as weddings, corporate functions, or parties. Catering services often include menu planning, food preparation, delivery, set-up, and clean-up. </p>
                            <a href='#' className='index-button'>View More</a>
                        </Indexinfo>
                    </Indexcon>
                </Container>
                <Indexbackgroud >
                    <Indexbackgroud2>
                        <Indexfootter>
                            <span style={{color: 'orange'}} > CATERING </span> 
                            <span>SERVICE</span> 
                            <p>Each type of catering service offers different features and options based on the client's needs and preferences.</p>
                            <Indeximg2>
                                <Indeximg3 src="https://image.makewebeasy.net/makeweb-template/m_1920x0/template0072/DefaultData/Image1_1_.webp?v=202012190947" width='90%' alt="" />
                                <Indeximg3 src="https://image.makewebeasy.net/makeweb-template/m_1920x0/template0072/DefaultData/Image1_2_.webp?v=202012190947" width='90%' alt="" />
                                <Indeximg3 src="https://image.makewebeasy.net/makeweb-template/m_1920x0/template0072/DefaultData/Image1_3_.webp?v=202012190947" width='90%' alt="" />
                                <Indeximg3 src="https://image.makewebeasy.net/makeweb-template/m_1920x0/template0072/DefaultData/Image1_4_.webp?v=202012190947" width='90%' alt="" />
                            </Indeximg2>
                        </Indexfootter>
                    </Indexbackgroud2>
                </Indexbackgroud>
        </Indexs>
    )
}

export default Index