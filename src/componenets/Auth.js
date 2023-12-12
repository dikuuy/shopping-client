import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../picture/shoppingauthbackground.jpg');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
`

const Wrapper = styled.div`
    width: 30%;
    height: 60vh;
    border-radius: 4px;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,.2);
    background: #fff;
    opacity: .9;
`

const FormField = styled.div`
    width: 100%;
    height: 100%;
`

const Form = styled.form`
    width: 100%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    width: 70%;
    padding: 10px 15px;
    border: 1px solid #444;
    border-radius: 3px;
    margin-bottom: 10px;
    background-color: none;
    background: transparent;
    font-weight: 600;
    color: #444;
    &:focus{
        outline: none;
        border: 1px solid ;
        color: #444;
    }
`
const Button = styled.button`
    border: none;
    padding: 10px 15px;
    width: 50%;
    cursor: pointer;
    background-color: transparent;
    color: #444;
    border: 1px solid #444;
    font-weight: bold;
    letter-spacing: 1.5px;
    margin-top: 10px;
`

const NavButton = styled.button`
    width: 50%;
    padding: 20px 20px;
    cursor: pointer;
    border: none;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: #444;
    color: white;
    font-weight: bold;
`

const Link = styled.a`
    font-size: 13px;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-top: 10px;
    margin-left: 55px;
`

const Action = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
`


export default function(){
    const hiddenElementDaftar = (e) => {
        const daftar = document.getElementById('daftar');
        const login = document.getElementById('login');
        daftar.style.display = 'none';
        login.style.display = 'flex';
        
    }
    
    const hiddenElementLogin = (e) => {
        const daftar = document.getElementById('daftar');
        const login = document.getElementById('login');
        login.style.display = 'none';
        daftar.style.display = 'flex'
    }
    return (
        <Container>
            <Wrapper>
                <FormField>
                    <NavButton onClick={(e) => hiddenElementDaftar(e)} style={{borderRight: '1px solid #fff'}}>Login</NavButton>
                    <NavButton onClick={(e) => hiddenElementLogin(e)}>Daftar</NavButton>
                    <Form id="login">
                        <Input placeholder="Username" type="text"/>
                        <Input placeholder="Password" type="password"/>
                        <Action>
                            <Button>Login</Button>
                            <Link href="/forgot">Lupa kata sandi!</Link>
                        </Action>
                            
                    </Form>

                    <Form id="daftar" style={{display: "none"}}>
                        <Input placeholder="Username" type="text"/>
                        <Input placeholder="Email" type="email"/>
                        <Input placeholder="Password" type="password"/>
                        <Input placeholder="Konfirm Password" type="password"/>
                        <Action>
                            <Button>Daftar</Button>
                        </Action>
                    </Form>
                </FormField>
            </Wrapper>
        </Container>
    )
}