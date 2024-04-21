import Navbar from '../component/Navbar'
import styled from 'styled-components'
import Footer from '../component/Footer'

const Container = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 1500px;
    margin: 0 auto;
    h1{
        font-size: 40px;
    }
    p{
        font-size: 25px;
    }
`
const Abcon = styled.div`
    display: flex;
`
const Abinfo = styled.div`
    width: 100%;
    padding: 2rem;
    margin: auto ;
    h2{
        font-size: 30px;
        display: inline;
    }
    p{
        margin: 20px 20px;
        font-size: 20px;
    }
`

const Abimg = styled.div`
    width: 50%;
    padding: 1rem;
`

const AboutSection1 = () => (
    <Container>
        <h1>Kittipat Chaipranitan</h1>
        <p>เด็กฝึกงาน Front End</p>
        <hr></hr>
        <Abcon>
            <Abinfo>
                <h2>ประวัติโดยย่อ</h2>
                <p>ผมนายกฤติภัทร ไชยประณิธาน ตอนนี้เป็นนักศึกษาที่พึ่งจบปีที่ 3 และกำลังฝึกงานอยู่โดยปกติแล้วเวลาว่างผมจะเล่นดูหนัง, ฟังเพลง, มีเล่นกีต้าบ้างในบางครั้งถึงแม้ว่าจะร้องเพลงไม่ค่อยเพราะ</p>
            </Abinfo>
            <Abimg>
                <img src="https://i.pinimg.com/564x/cd/27/07/cd2707c26028eaa91de3cbabb767562c.jpg" width="70%" height="100%" alt="" />
            </Abimg>
        </Abcon>
        <hr />
    </Container>
);

const AboutSection2 = () => (
    <Container>
        <Abcon>
            <Abinfo>
                <h2>การศึกษา</h2>
                <p>ปริญญาตรีอยู่ที่ มหาวิทยาลัยพระจอมเกล้าพระนครเหนือ ตอนประถมศึกษาที่โรงเรียนอัมพรไพศาลและมัธยมเคยอยู่ที่โรงเรียนหอวังนนทบุรี</p>
            </Abinfo>
            <hr />
            <Abinfo>
                <h2>
                    ทักษะ
                </h2>
                <p>
                    ตัดต่อวิดีโอ, เล่นกีต้า, เล่นฟุตบอลและบาสเก็ตบอล, เขียนโค้ดได้ react, html...
                </p>
            </Abinfo>
        </Abcon>
        <hr />
    </Container>
);


const About = () => {
    return (
        <div>
            <Navbar />
            <AboutSection1 />
            <AboutSection2 />
            <Footer />
        </div>
    )
}

export default About