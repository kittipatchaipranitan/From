import styled from 'styled-components'

const PerformanContainer = styled.div`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    background-color: rgba(255,152,67,255);
    padding: 10px;

    p{
        font-size: 40px;
        color: white;
        text-align: center;
        padding: 10px;
    }
`

const ButtonContainer = styled.div`
    text-align: center;
    font-size: 20px;
`
const ImgContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 15px;
    column-gap: 15px;
    padding-bottom: 15px;
    max-width: 1200px;
    margin: 0 auto;
`

const Img = styled.img`
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
`
const Mainbutton = styled.a`
    display: inline-block;
    background-color: white;
    color: rgba(255,152,67,255);
    padding: 10px;
    text-decoration: none;
    border-radius: 5px;
    &:hover {
        background: #000000;
        color: rgba(255,152,67,255);
        }

    &:active {
        background-color: #ffffff;
        box-shadow: 5px 5px #666;
        transform: translateY(4px);
    }
`


const Performance = () => {
    return (
        <PerformanContainer>
            <p>Performance</p>
            <ImgContainer>
                <Img src="https://img.youtube.com/vi/fAmOJpVDliI/maxresdefault.jpg" width="100%" height="100%" alt="" />
                <Img src="https://i.ytimg.com/vi/VQ4lo6Huylc/maxresdefault.jpg" width="100%" height="100%" alt="" />
                <Img src="https://www.chillpainai.com/src/wewakeup/scoop/images/ebcf653239dc76befc2c98a275cb6f0344ba3b12.png" width="100%" height="100%" alt="" />
                <Img src="https://contentshifu.com/wp-content/uploads/2017/03/Davinci-resolve-1.png" width="100%" height="100%" alt="" />
                <Img src="https://storage.googleapis.com/techsauce-prod/uploads/2018/04/garena-world-esports-for-all.jpg" width="100%" height="100%" alt="" />
                <Img src="https://kiji.life/newkiji/wp-content/uploads/2018/02/utube-1600x800-768x384.jpg" width="100%" height="100%" alt="" />
            </ImgContainer>
            <ButtonContainer>
                <Mainbutton href='/Portfolio'>View More</Mainbutton>
            </ButtonContainer>
        </PerformanContainer>
    )
}

export default Performance