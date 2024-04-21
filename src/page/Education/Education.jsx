import React from 'react'
import Navbar from '../component/Navbar'
import styled from 'styled-components'
import Footer from '../component/Footer'

const App = styled.header`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`
const Backgroud = styled.div`
    background-image: url('https://scontent.fbkk7-2.fna.fbcdn.net/v/t31.18172-8/19238180_1392073190848406_7243158113177477069_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHqNRFl84QJIEKnryrM3kov8J7hZVze8mTwnuFlXN7yZL5WaWjkxrTBCKKsFo5n-8yrN-fhPy6S4ta_Jc_AiHFz&_nc_ohc=x-DK6gt76bAAb5Iu4be&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfC6H0I6yXmN-yTDruaKTW6H19L_uVOYkf_LtkzDi5JrKA&oe=664836E0') ;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 2rem;
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
    padding: 5rem;
    text-align: center;
    color: #ffffff ;
    font-size: 25px;
    p{
        margin: 20px 0;
        text-shadow: black 0.1em 0.1em 0.2em
    }
    h3{
        text-shadow: black 0.1em 0.1em 0.2em
    }
`

const Backgroud2 = styled.div`
    background-image: url('https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/305212799_475833514541352_1099545544528081122_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXJoCNtmnS7hA5CTfO2SgMSY0xDDorM41JjTEMOiszjRXyWiszIScXOioKTQhGaSd9NYnqm_rSv9k9zPab7WBS&_nc_ohc=IVBGHvj6zYoAb4jI73s&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfCKvN9tc2au9wk6WSX56M9qUKcRc0_2NwwOjdaiiGt3pQ&oe=66268B13') ;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 2rem;
`
const Backgroud3 = styled.div`
    background-image: url('https://www.homenayoo.com/wp-content/uploads/2021/03/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%AD%E0%B8%A1%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2-3.jpg') ;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 2rem;
`

const Educationsection = () => (
    <Backgroud>
        <Container>
            <Maincon>
                <Maininfo>
                    <h3> โรงเรียนอัมพรไพศาล </h3>
                    <p>เข้าเรียนตั้งแต่อนุบาล 3 จนถึง ประถมศึกษาปีที่ 6</p>
                </Maininfo>
            </Maincon>
        </Container>
    </Backgroud>
);

const Educationsection2 = () => (
    <Backgroud2>
        <Container>
            <Maincon>
                <Maininfo>
                    <h3> โรงเรียนนวมินทราชินูทิศ หอวัง นนทบุรี </h3>
                    <p>เข้าเรียนตั้งแต่มัธยมศึกษาปีที่ 1 จนถึง ปีที่ 6</p>
                </Maininfo>
            </Maincon>
        </Container>
    </Backgroud2>
);

const Educationsection3 = () => (
    <Backgroud3>
        <Container>
            <Maincon>
                <Maininfo>
                    <h3> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ </h3>
                    <p>เข้าเรียนตั้งแต่ปีที่ 1 ตอนนี้ จบปีที่ 3 กำลังฝึกงาน</p>
                </Maininfo>
            </Maincon>
        </Container>
    </Backgroud3>
);

function Education() {
    return (
        <div>
            <Navbar />
            <App>
                <Educationsection />
                <Educationsection2 />
                <Educationsection3 />
            </App>
            <Footer />
        </div>
    )
}

export default Education