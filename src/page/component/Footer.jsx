import styled from 'styled-components'

const Foot = styled.div`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    padding: 1rem;
    background-color: rgba(255,152,67,255);
    margin-top: 50px;
    
`

const FooterInfo = styled.div`
    max-width: 1400px;
    margin: auto;
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

const Contact = () => (
    <Foot>
        <FooterInfo>
            <h3>KITTIPAT CHAIPRANITAN</h3>
            <p>132/40, Moo 3, Bang Phut, Pak Kret, Nonthaburi, 11120,</p>
            <p>Tel : 099 951 3694 Email : s6404062620176@email.kmutnb.ac.th</p>
        </FooterInfo>
    </Foot>
);



function Footer() {
    return (
        <Contact />
    )
}

export default Footer