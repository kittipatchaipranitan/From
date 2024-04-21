import styled from 'styled-components'

const Backgroud = styled.div`
    background-image: url('https://kmutnb.ac.th/getattachment/55424ff1-d1e6-4fbd-b990-52753af0cdf6/.aspx') ;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
const Container = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 1700px;
    margin: 0 auto;
`
const Maininfo = styled.div`
    width: 190%;
    padding: 4rem;
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
const Mainbutton = styled.a`
    display: inline-block;
    background-color: rgba(255,152,67,255);
    color: white;
    padding: 10px;
    text-decoration: none;
    border-radius: 5px;
    &:hover {
        background: #ffffff;
        color: rgba(255,152,67,255);
        }

    &:active {
        background-color: #ffffff;
        box-shadow: 5x 5px #666;
        transform: translateY(4px);
    }
`

const Educationsection = () => (
    <Backgroud>
        <Container>
            <Maininfo>
                <h3>EDUCATION AND QUALIFICATION </h3>
                <p>{`King Mongkut's University of Technology North Bangkok (KMUTNB)`}</p>
                <Mainbutton href='/Education'>View More</Mainbutton>
            </Maininfo>
        </Container>
    </Backgroud>
);


const Main = () => {
    return (
        <Educationsection />
    )
}





export default Main