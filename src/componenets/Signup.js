import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 60%;
    height: 80vh;
    background-color: #eaeaea;
    display: flex;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`

const FormField = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    padding: 9px 10px;
    width: 70%;
    margin-bottom: 18px;
    border: 1px solid #333;
    border-radius: 3px;
    &:focus {
        outline: none;
    }
`
const Button = styled.button`
    border: 1px solid white;
    padding: 10px 15px;
    width: 70%;
    cursor: pointer;
    background-color: #444;
    color: #eaeaea;
    font-weight: bold;
    letter-spacing: 1.5px;
    margin-top: 10px;
`

const NavButton = styled.button`
    padding: 20px 10px;
    border: none;
    border-left: 2px solid #eaeaea;
    background-color: #444;
    color: #eaeaea;
    cursor: pointer;
`

const DataField = styled.div`
    height: 100%;
`


export default function(){
    const hiddenElementDaftar = (e) => {
        const daftar = document.getElementById('daftar');
        const login = document.getElementById('login');
        daftar.style.visibility = 'hidden';
        login.style.visibility = 'visible';
        daftar.style.animationDuration = '5s';
        
    }
    
    const hiddenElementLogin = (e) => {
        const daftar = document.getElementById('daftar');
        const login = document.getElementById('login');
        login.style.visibility = 'hidden';
        daftar.style.visibility = 'visible';
    }
    return (
        <Container>
            <Wrapper>
                <FormField>
                    <NavButton onClick={(e) => hiddenElementDaftar(e)}>LOGIN</NavButton>
                    <DataField id="login">
                        <Form>
                            <Input placeholder="Username" type="text"/>
                            <Input placeholder="Password" type="password"/>
                            <Button>Login</Button>
                        </Form>
                    </DataField>
                </FormField>

                <FormField>
                    <NavButton onClick={(e) => hiddenElementLogin(e)}>DAFTAR</NavButton>
                    <DataField id="daftar">
                        <Form>
                            <Input placeholder="Username" type="text"/>
                            <Input placeholder="Email" type="email"/>
                            <Input placeholder="Password" type="password"/>
                            <Input placeholder="Konfirm Password" type="password"/>
                            <Button>Daftar</Button>
                        </Form>
                    </DataField>
                </FormField>
            </Wrapper>
        </Container>
    )
}