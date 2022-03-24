import { Alert } from '../common-components/alert/Alert';
import { Button } from '../common-components/button/Button';
import { ButtonLink } from '../common-components/buttonLink/ButtonLink';
import { Caption } from '../common-components/caption/Caption';
import { Card } from '../common-components/card/Card';
import { Description } from '../common-components/description/Description';
import { Header } from '../common-components/header/Header';
import { HeadingOne } from '../common-components/headingOne/HeadingOne';
import { HeadingTwo } from '../common-components/headingTwo/HeadingTwo';
import { SearchField } from '../common-components/searchField/SearchField';
import {
	SelectField,
	Option,
} from '../common-components/selectField/SelectField';
import { Subtitle } from '../common-components/subtitle/Subtitle';
export function Search() {
	return (
		<div>
			<Header />
			<SearchField placeholder="Digite um nome de herói ou heroína" />
			<Button ghost={true}>Buscar</Button>
			<Card>
				<HeadingOne>Heading One</HeadingOne>
				<HeadingTwo>Heading Two</HeadingTwo>
				<div>
					<Subtitle>Subtitle</Subtitle>
				</div>
				<Description>Description</Description>
				<div>
					<Caption>Caption</Caption>
				</div>
			</Card>
			<ButtonLink>Ver Mais</ButtonLink>
			<SelectField placeholder="Nota">
				<Option>Opção 1</Option>
			</SelectField>
			<Alert type="info">Nenhum herói ou heroína encontrado</Alert>
			<Alert type="success" small={true}>
				Sua avaliação foi atribuída com sucesso!
			</Alert>
			<Alert type="error" small={true}>
				Ocorreu um erro ao avaliar
			</Alert>
		</div>
	);
}