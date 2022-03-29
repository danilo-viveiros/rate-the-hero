import styled from "styled-components"
import {Flex,Box} from 'reflexbox'
import {Shadows, 
    BorderRadiuses,
    Spaces,
    Colors,
} from '../shared/DesignTokens'
import {
    selectField,
    Option,
    SelectField,
    
}from '../common-components/selectField/SelectField'
import { Button } from "../common-components/button/Button"
import { HeadingTwo } from "../common-components/headingTwo/HeadingTwo"
import { Description } from "../common-components/description/Description"
import { Card } from "../common-components/card/Card"
import { Caption } from "../common-components/caption/Caption"

const Container = styled.aside`
width: 727px;
margin:0 auto;
`;
const HeroHavatar = styled.div`
width: 344px;
height: 194px;
box-shadow: ${Shadows.ONE};
border-radius:${BorderRadiuses.ONE};
background-image: url('${(props)=> props.src}');
background-repeat: no-repeat;
background-size: cover;
background-position: center 25%;
`;
const DetailsGrid = styled.section`
display: grid;
grid-tamplate-columns: 1fr 1fr 1fr;
gap: ${Spaces.TWO};
`;

export function Details(){
    return (
        <Container>
            <Flex mt={Spaces.FOUR} as="section">
                <HeroHavatar src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"></HeroHavatar>
        
                <Flex flexDirection="column"
                    justifyContent="center"
                    height={194}
                    ml={Spaces.SEVEN}>

                        <form>
                            <Flex>
                                <SelectField>
                                    <Option value=""disable>
                                        Selecione a nota
                                    </Option>
                                    <Option>5</Option>
                                    <Option>4</Option>
                                    <Option>3</Option>
                                    <Option>2</Option>
                                    <Option>1</Option>
                                </SelectField>
                                <Box ml={Spaces.THREE}>
                                    <Button type="submit">Atribuir</Button>
                                </Box>
                            </Flex>
                        </form>
                </Flex>
            </Flex>
            <Box my={Spaces.ONE_HALF} as="section">
                <HeadingTwo as="h1">Batman</HeadingTwo>
                <Description color={Colors.GRAY_700}>
                    Bruce Wayne - DC Comics
                </Description>
            </Box>

        </Container>
    )
}