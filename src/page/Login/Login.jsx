import React from 'react';
import { Form, Field } from 'react-final-form';
import { Body, Wrapper, Input, Requied, Button, Word, Box } from './LoginStyled'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        if(values.username == "Kittipat" && values.password == "Chaipranitan"){
            console.log("Pass")
            navigate("/Navbar")
        }
        else{
            console.log("Fall")
        }
    }

    const requiredUser = value => (value ? undefined : 'กรุณากรอกชื่อผู้ใช้')
    const requiredPass = value => (value ? undefined : 'กรุณากรอกรหัสผ่าน')

    return (
        <Body>
            <Wrapper>
                <h1>LOGIN</h1>
                <Form onSubmit={onSubmit} >
                    {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>

                            <Box>
                                <Field name="username" placeholder="username" validate={requiredUser} >
                                    {({ input, meta, placeholder }) => (
                                        <Input >
                                            <input {...input} placeholder={placeholder} />
                                            {meta.error && meta.visited && <Requied>{meta.error}</Requied>}
                                        </Input>
                                    )}
                                </Field>
                            </Box>

                            <Box>
                                <Field name="password" placeholder="password" validate={requiredPass}>
                                    {({ input, meta, placeholder }) => (
                                        <Input>
                                            <input {...input} placeholder={placeholder} />
                                            {meta.error && meta.visited && <Requied>{meta.error}</Requied>}
                                        </Input>
                                    )}
                                </Field>
                            </Box>

                            <Button type="submit">Submit</Button>

                        </form>
                    )}
                </Form>
            </Wrapper>
        </Body>
    )
}

export default Login;
