
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
    width: 65%;
    padding: 2rem;
    margin: auto;
    p{
        margin: 20px 0;
        font-size: 20px;
    }
    h3{
        font-size: 30px;
        display: inline;
    }
    span{
        color: rgba(255,152,67,255)
    }
`
const Indexbutton = styled.a`
        display: inline-block;
        background-color: rgba(255,152,67,255);
        color: white;
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

const Indexbackgroud = styled.div`
    background-color: rgba(255,152,67,255);
`

const Indexbackgroud2 = styled.div`
    background-color: white;
    border-radius: 0px 0px 200px 200px;
`

const Indexfootter = styled.div`
    font-size: 30px;
    text-align: center;
    padding-top: 2rem;;
    max-width: 1400px;
    margin: 0 auto;
    padding-bottom: 30px;
    p{
        font-size: 20px;
        text-align: center;
        padding-top: rem;
    }
`
const Indeximg2 = styled.div`
    padding-top: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
`
const Indeximg3 = styled.img`
    &:hover {
        transform: translateY(-10px);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
    }
`

const ImageGallery = () => {

    const ImgAbout = [
        "https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/blog/2023-08-22/web-apps-vs-websites-thumbnail.jpg",
        "https://i.pinimg.com/originals/77/6b/9b/776b9ba8b186f008d26c99d40fa996a3.jpg",
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Movie-Images-Desktop.jpg",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"

    ];

    return (
        <Indeximg>
            {ImgAbout.map((imgURL, indexURL) => (
                <img key={indexURL} src={imgURL} width="100%" height="100%" alt='' />
            ))}
        </Indeximg>
    )
};

const Aboutsection = () => (
    <Indexinfo>
        <h3> About  <span> Kittipat Chaipranitan   </span> </h3>
        <p>ผมเป็นนักศึกษาสาขาวิชาวิทยาการคอมพิวเตอร์ ฝึกงานในตำแหน่ง Front End Developer ส่วนตัวจะเป็นคนชอบดูหนัง, ฟังเพลง, เล่นกีต้า เล่นเกมบ้างเป็นบางครั้งและชอบทำอาหาร.... </p>
        <Indexbutton href='/About'>View More</Indexbutton>
    </Indexinfo>
);

const EducationSection = () => {

    const ImgEDUCATION = [
        "https://cdn.baania.com/b10/property-project/3868/photo/418754.jpg",
        "https://image.makewebeasy.net/makeweb/m_1920x0/jTu7Jpl5E/Other/DSC08630_retouch__1_.jpg?v=202012190947",
        "https://static.thairath.co.th/media/dFQROr7oWzulq5FZWt1fGw730nTvpuUkKdNBzPEfVYibHzT9f7HhlCvtplkPsajAU2E.jpg"
    ];

    return (
        <Indexbackgroud >
            <Indexbackgroud2>
                <Indexfootter>
                    <span style={{ color: 'orange' }} > EDUCATION AND </span>
                    <span>QUALIFICATION</span>
                    <p></p>
                    <Indeximg2>
                        {ImgEDUCATION.map((imgED, indexED)=> (
                            <Indeximg3 key={indexED} src={imgED} width='90%' height="100%" alt=""/>
                        ))}
                    </Indeximg2>
                </Indexfootter>
            </Indexbackgroud2>
        </Indexbackgroud>
    )
};

const Header = () => (
    <Container>
        <ImageGallery />
        <Aboutsection />
    </Container>
);

const Index = () => {
    return (
        <Indexs>
            <Header />
            <EducationSection />
        </Indexs>
    )
}


export default Index;
