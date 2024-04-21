import styled from 'styled-components'

export const Body = styled.body`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: url('https://i.pinimg.com/originals/c9/dd/42/c9dd42f0c4b4e60f8722a9550f13ac30.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    `;

export  const Wrapper = styled.div`
        width: 420px;
        color: white;
        border-radius: 10px;
        padding: 30px 40px;
        border: 2px solid rgba(255, 255, 255, .2);
        backdrop-filter: blur(20px);
    h1 {
        font-size: 36px;
        text-align: center;
    }
    input{
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        border: 2px solid rgba(255, 255, 255, .2);
        border-radius: 40px;
        font-size: 16px;
        color: white;
        padding: 10px 20px 10px 20px;
        border: solid;
    } 
    `;

export  const Input = styled.div`
        ::placeholder {
        color: white;
    }
    `;

export  const Requied = styled.span`
        display: flex;
        color: red;
        padding: 5px;
        margin-left: 10px;
    `;
export  const Button = styled.button`
        width: 100%;
        height: 45px;
        background: white;
        border: none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgb(66, 66, 66);
        cursor: pointer;
        font-size: 15px;
        color: black;
        font-weight: 600;

        &:hover {
        background: #9d6af0;
        color: #333;
        }

        &:active {
        background-color: #9d6af0;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
        }
    `;

export  const Word = styled.p`
        font-size: 25px;
        margin: 5px;
        padding-top: 10px;
    `;

export  const Box = styled.div`
        width: 100%;
        height: 50px;
        margin: 30px 0;
    `;