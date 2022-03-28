import styled from 'styled-components'
import { Box } from 'reflexbox';
import { Flex } from 'reflexbox';
import { Spaces } from '../shared/DesignTokens'
import { Button } from '../common-components/button/Button';
import {SearchField} from '../common-components/searchField/SearchField'
import { HeroCard } from '../components/heroCard/HeroCard';

const HeroesGrid = styled(Box)`
	display:grid;
	grid-tamplate-columns:1fr;
	gap:${Spaces.ONE_HALF};
	
	@media (min-width: 1024px){
		grid-tamplate-columns:1fr 1fr 1fr 1fr;
		gap:${Spaces.TWO} 
	}
	`

export function Search() {
	return (
		<>
		<Flex 
		width={['100%', '600px']}
		mx={[Spaces.None, 'auto']}
		mt={[Spaces.THREE, Spaces.FIVE]}
		px={[Spaces.ONE, Spaces.NONE]}
		mb={[Spaces.TWO, Spaces.FOUR]}
		>
			<Box flexGrow="1">
				<SearchField placeholder="Digite um nome de herói ou heroína"/>
			</Box>

			<Box ml={Spaces.TWO}>
				<Button>Buscar</Button>
			</Box>

		</Flex>
		<HeroesGrid 
		px={[Spaces.ONE]}
		pb={[Spaces.TWO]}>
			<HeroCard
				id="1"
				secretIndentity="Bruce Wayne"
				name="Batman"
				picture="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
				universe="DC Comics"/>
			<HeroCard
				id="1"
				secretIndentity="Bruce Wayne"
				name="Batman"
				picture="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
				universe="DC Comics"/>
			<HeroCard
				id="1"
				secretIndentity="Bruce Wayne"
				name="Batman"
				picture="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
				universe="DC Comics"/>		
		</HeroesGrid>
		</>
	);
}