import styled from 'styled-components'

const Nav = styled.nav`
    background-color: rgba(255,152,67,255);
    padding: 1rem;
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1500px;
    margin: 0 auto;
`
const Logo = styled.div`
    a{
        font-size: 2rem;
        color: #fff;
        text-decoration: none;
        text-shadow: black 0.1em 0.1em 0.2em
    }
`
const Menu = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    text-shadow: black 0.1em 0.1em 0.2em;
    li{
        margin: 0 1rem;
    }
    li a{
        color: #fff;
        text-decoration: none;
    }
`
const A = styled.a`
    &:hover {
        padding: 10px;
        transform: translateY(-5px);
        color: #000000;
    }

    &:active {
        background-color: #ffffff;
        box-shadow: 5px 5px #666;
        transform: translateY(4px);
    }
`
const Navsection = () => (
    <Logo>
        <a href='/App'>K.C.</a>
    </Logo>
);

const MenuBar = () => {
    const menuItems = [
        { text: 'Performance', href: '/Portfolio' },
        { text: 'About', href: '/About' },
        { text: 'Education', href: '/Education' },
        { text: 'Logout', href: '/' }
    ];
    return (
        <Menu>
            {menuItems.map((item, index) => (
                <li key={index}><A href={item.href}> {item.text} </A> </li>
            ))}
        </Menu>
    )
};


const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <Navsection />
                <MenuBar />
            </NavContainer>
        </Nav>
    )
}

export default Navbar