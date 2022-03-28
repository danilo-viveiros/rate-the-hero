import styled from 'styled-components'
import {Box} from 'reflexbox'
import {Card} from '../../common-components/card/Card'
import {Caption} from '../../common-components/caption/Caption'
import {Description} from '../../common-components/description/Description'
import {HeadingTwo} from '../../common-components/headingTwo/HeadingTwo'
import {ButtonLink} from '../../common-components/buttonLink/ButtonLink'
import {
    BorderRadiuses,
    Colors,
    Shadows,
    Spaces,
}from '../../shared/DesignTokens'

const InformationGrid = styled(Box)`
    display:Grid;
    grid-tamplate-columns: 1fr 70px;
    gap: ${Spaces.TWO};
    `;

const HeroAvatar = styled.div`
    width:100%;
    height:70px;
    box-shadow: ${Shadows.ONE};
    border-radius: ${BorderRadiuses.ONE};
    background-image: url('${(props)=> props.src}');
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    `;

export function HeroCard({secretIndentity, name, picture, universe, id}){
    return(
        <Card>
            <InformationGrid p={Spaces.TWO} mb={Spaces.ONE_HALF}>
                <Box>
                    <Caption as="div" color={Colors.GRAY_700}>
                        {secretIndentity}
                    </Caption>
               
                    <Box mb={Spaces.ONE}>
                        <HeadingTwo>{name}</HeadingTwo>
                    </Box>
                    <Description as="div" color={Colors.GRAY_700} >
                        <strong>Universo:</strong>{universe}
                    </Description>
                    <Description as="div" color={Colors.GRAY_700}>
                        <strong>Nota atual:</strong>-
                    </Description>
                </Box> 
                <HeroAvatar src={picture}/>
            </InformationGrid>
            <Box width="87px">
                <ButtonLink to={`/detalhes/${id}`}>Ver mais</ButtonLink>
            </Box>
        </Card>
    );
}

