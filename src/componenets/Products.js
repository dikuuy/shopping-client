import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: #eee;
`

const WrapperProducs = styled.div`
    height: 100vh;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
`

const Card = styled.div`
    background-color: #fff;
    border-radius: 2px;
    transition: transform .2s;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    &:hover{
        cursor: pointer;
        transform: scale(1.01);
    }
`
const Info = styled.div`
    padding: 20px;
`

const Img = styled.img`
    width: 100%;
    height: 20vh;
    border-radius: 2px 2px 0 0;
`

const Title = styled.h2`
`

const Price = styled.p`
    letter-spacing: 1px;
    text-align: start;
`

const Sold = styled.p`
    text-align: end;
    margin-top: -19px;
`

const Row = styled.div`
    margin-top: 20px;
`

export default function(){

    const detail = (e) => {
        console.log(e)
    }

    return (
        <Container>
            <WrapperProducs>
                <Cards>
                    <Card onClick={(e) => detail(e)}>
                        <Img src="/picture/shoppingauthbackground.jpg"/>
                        <Info>
                            <Title>Arduino</Title>
                            <Row>
                                <Price>Rp20.000</Price>
                                <Sold>1 Terjual</Sold>
                            </Row>
                        </Info>
                    </Card>

                    <Card>
                        <Img src="/picture/shoppingauthbackground.jpg"/>
                        <Info>
                            <Title>Arduino</Title>
                            <Row>
                                <Price>Rp190.000</Price>
                                <Sold>220 Terjual</Sold>
                            </Row>
                        </Info>
                    </Card>

                    <Card>
                        <Img src="/picture/shoppingauthbackground.jpg"/>
                        <Info>
                            <Title>Arduino</Title>
                            <Row>
                                <Price>Rp193.000</Price>
                                <Sold>20 Terjual</Sold>
                            </Row>
                        </Info>
                    </Card>

                    <Card>
                        <Img src="/picture/shoppingauthbackground.jpg"/>
                        <Info>
                            <Title>Arduino</Title>
                            <Row>
                                <Price>Rp193.000</Price>
                                <Sold>20 Terjual</Sold>
                            </Row>
                        </Info>
                    </Card>

                    <Card>
                        <Img src="/picture/shoppingauthbackground.jpg"/>
                        <Info>
                            <Title>Arduino</Title>
                            <Row>
                                <Price>Rp193.000</Price>
                                <Sold>20 Terjual</Sold>
                            </Row>
                        </Info>
                    </Card>
                </Cards>
            </WrapperProducs>
        </Container>
    )
}