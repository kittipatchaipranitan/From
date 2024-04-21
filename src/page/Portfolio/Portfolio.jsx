import Navbar from '../component/Navbar'
import styled from 'styled-components'
import Footer from '../component/Footer'

const Port = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    h1{
        padding-left: 30px;
        font-size: 50px;
    }
`

const Container = styled.div`
    max-width: 1700px;
    margin: auto;
`
const Portcon = styled.div`
    display: flex;
    padding-top: 20px;
`
const Portimg = styled.div`
    width: 50%;
    padding: 1rem;
    border-radius: 20px;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
`
const Portinfo = styled.div`
    margin: auto;
    padding: 2rem;
    h1{
        display: inline;
    }
`

const Portfoliosection = () => (
    <Port>
        <h1>
            Performance
        </h1>
        <hr />
        <Container>
            <Portcon>
                <Portimg>
                    <img src="https://img.youtube.com/vi/fAmOJpVDliI/maxresdefault.jpg" width="100%" alt="" />
                </Portimg>
                <Portinfo>
                    <h1>Furniture Sales System</h1>
                    <h2>ทำหน้าบ้านตกแต่ง CSS</h2>
                </Portinfo>
            </Portcon>
            <Portcon>
                <Portinfo>
                    <h1>Game flappy bird</h1>
                    <h2>เป็นเกมที่ฝึกทำเป็นเกมแรกทั้งหมดคนเดียว</h2>
                </Portinfo>
                <Portimg>
                    <img src="https://i.ytimg.com/vi/VQ4lo6Huylc/maxresdefault.jpg" width="100%" alt="" />
                </Portimg>
            </Portcon>
            <Portcon>
                <Portimg>
                    <img src="https://www.chillpainai.com/src/wewakeup/scoop/images/ebcf653239dc76befc2c98a275cb6f0344ba3b12.png" width="100%" alt="" />
                </Portimg>
                <Portinfo>
                    <h1>Online train ticket</h1>
                    <h2>ทำหน้าบ้านตกแต่ง CSS</h2>
                </Portinfo>
            </Portcon>
            <Portcon>
                <Portinfo>
                    <h1>Edit video</h1>
                    <h2>ฝึกใช้ Premier pro ทำคริปลง Youtube</h2>
                </Portinfo>
                <Portimg>
                    <img src="https://contentshifu.com/wp-content/uploads/2017/03/Davinci-resolve-1.png" width="100%" alt="" />
                </Portimg>
            </Portcon>
            <Portcon>
                <Portimg>
                    <img src="https://storage.googleapis.com/techsauce-prod/uploads/2018/04/garena-world-esports-for-all.jpg" width="100%" alt="" />
                </Portimg>
                <Portinfo>
                    <h1>Tournament Game</h1>
                    <h2>ลงแข่งเกมชิงตั๋วไปรายการเกมของ Garena</h2>
                </Portinfo>
            </Portcon>
            <Portcon>
                <Portinfo>
                    <h1>Cash game</h1>
                    <h2>ฝึกแคสเกมลงบน Youtube</h2>
                </Portinfo>
                <Portimg>
                    <img src="https://kiji.life/newkiji/wp-content/uploads/2018/02/utube-1600x800-768x384.jpg" width="100%" alt="" />
                </Portimg>
            </Portcon>
        </Container>
    </Port>

);

const Portfolio = () => {
    return (
            <>
            <Navbar />
            <Portfoliosection />
            <Footer />
            </>
    )
}

export default Portfolio