import React from 'react'
import styled from 'styled-components'

const Port = styled.div`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
`
const Pobackgroud = styled.div`
    background-color: rgba(255,152,67,255);
`

const Pocontainer = styled.div`
    p{
        font-size: 35px;
        color: white;
        text-align: center;
        padding-top: 20px;
    }
`
const Pocon = styled.div`
    display: flex;
`

const Poimg1 = styled.div`
    text-align: center;
    color: white;
    font-size: 20px;
    padding: 20px;
    max-width: 1300px;
    margin: 0 auto;
`
const Poimg2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 30px;
`

const Img = styled.img`
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
`



function Portfolio() {
    return (
        <Port>
            <Pobackgroud>
                <Pocontainer>
                    <p>PORTFOLIO</p>
                    <Pocon>
                        <Poimg1>
                            <Poimg2>
                                <Img src="https://image.makewebeasy.net/makeweb-template/0/template0072/DefaultData/Album__6_.webp?v=202012190947" width="90%" alt="" />
                                <Img src="https://image.makewebeasy.net/makeweb-template/0/template0072/DefaultData/Album__5_.webp?v=202012190947" width="90%" alt="" />
                                <Img src="https://image.makewebeasy.net/makeweb-template/0/template0072/DefaultData/Album__4_.webp?v=202012190947" width="90%" alt="" />
                                <Img src="https://image.makewebeasy.net/makeweb-template/0/template0072/DefaultData/Album__3_.webp?v=202012190947" width="90%" alt="" />
                                <Img src="https://image.makewebeasy.net/makeweb-template/0/template0072/DefaultData/Album__2_.webp?v=202012190947" width="90%" alt="" />
                                <Img src="https://image.makewebeasy.net/makeweb-template/0/template0072/DefaultData/Album__1_.webp?v=202012190947" width="90%" alt="" />
                            </Poimg2>
                        </Poimg1>
                    </Pocon>
                </Pocontainer>
            </Pobackgroud>
        </Port >
    )
}

export default Portfolio